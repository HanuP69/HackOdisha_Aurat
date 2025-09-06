'''
from fastapi import FastAPI, Form, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
import subprocess, os, uuid, wave, json

from huggingface_hub import InferenceClient
from langchain_google_genai import ChatGoogleGenerativeAI
from google import genai
from google.genai import types

load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve audio/viseme outputs
OUTPUT_DIR = "outputs"
os.makedirs(OUTPUT_DIR, exist_ok=True)
app.mount("/static", StaticFiles(directory=OUTPUT_DIR), name="static")

PORT = 8000

# Hugging Face STT
clientSTT = InferenceClient(
    provider="fal-ai",
    api_key=os.environ["HUGGINGFACEHUB_API_KEY"],
)

# Gemini LLM
llm_google = ChatGoogleGenerativeAI(
    model="gemini-2.5-pro",
    api_key=os.environ["GOOGLE_API_KEY"]
)
client = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])

# Store chat history in memory {session_id: [{"role": "user"/"assistant", "content": "..."}]}
chat_histories = {}

def wave_file(filename, pcm, channels=1, rate=24000, sample_width=2):
    """Save PCM data to WAV"""
    with wave.open(filename, "wb") as wf:
        wf.setnchannels(channels)
        wf.setsampwidth(sample_width)
        wf.setframerate(rate)
        wf.writeframes(pcm)

async def process_text_input(text: str, session_id: str):
    """Shared text -> LLM -> TTS -> visemes with memory"""
    print(f"Processing ({session_id}): {text}")

    # Initialize history if not present
    if session_id not in chat_histories:
        chat_histories[session_id] = []

    # Add user message
    chat_histories[session_id].append({"role": "user", "content": text})

    # Keep only last 5 turns
    history = chat_histories[session_id][-10:]

    # Format history for prompt
    conversation = ""
    for turn in history:
        conversation += f"{turn['role'].capitalize()}: {turn['content']}\n"

    prompt = f"""
You are **Dr. Luna**, a compassionate female doctor.
Your style: warm, clear, empathetic.
Tasks:
- Respond in the SAME language that the patient uses. If the patient writes in Hindi, reply in Hindi. If English, reply in English. If mixed, reply in mixed style.
- Suggest home remedies or safe OTC meds if minor.
- If serious, urge the patient to see a local physician.
- Keep responses short (2–8 sentences).
- Never say "I am an AI".
- Always reply as Dr. Luna.

Conversation so far:
{conversation}

Now respond to the latest patient input.

At the end of your reply, append:
EMOTION: [happy | neutral | sad | concern]
    """

    try:
        llm_response = llm_google.invoke(prompt)
        chatOut = llm_response.content
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"LLM error: {str(e)}")

    # Extract emotion
    if "EMOTION:" in chatOut:
        chat_text, emotion_label = chatOut.rsplit("EMOTION:", 1)
        chat_text = chat_text.strip()
        emotion_label = emotion_label.strip().lower()
        if emotion_label not in ["happy", "neutral", "sad", "concern"]:
            emotion_label = "neutral"
    else:
        chat_text = chatOut.strip()
        emotion_label = "neutral"

    # Save assistant reply to history
    chat_histories[session_id].append({"role": "assistant", "content": chat_text})

    # Generate TTS audio
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash-preview-tts",
            contents=chat_text,
            config=types.GenerateContentConfig(
                response_modalities=["AUDIO"],
                speech_config=types.SpeechConfig(
                    voice_config=types.VoiceConfig(
                        prebuilt_voice_config=types.PrebuiltVoiceConfig(
                            voice_name="Leda"  # Female voice
                        )
                    )
                ),
            ),
        )
        pcm_data = response.candidates[0].content.parts[0].inline_data.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"TTS error: {str(e)}")

    # Save audio + visemes
    file_id = str(uuid.uuid4())
    audio_path = os.path.join(OUTPUT_DIR, f"{file_id}.wav")
    viseme_path = os.path.join(OUTPUT_DIR, f"{file_id}.json")

    wave_file(audio_path, pcm_data)

    try:
        subprocess.run(
            ["rhubarb", "-f", "json", audio_path, "-o", viseme_path],
            check=True
        )
    except subprocess.CalledProcessError:
        raise HTTPException(status_code=500, detail="Viseme generation failed")

    try:
        with open(viseme_path, "r") as f:
            rhubarb_out = json.load(f)
    except Exception:
        raise HTTPException(status_code=500, detail="Viseme JSON read failed")

    visemes = {"mouthCues": rhubarb_out.get("mouthCues", [])}
    audio_url = f"http://localhost:{PORT}/static/{file_id}.wav"

    return {
        "chat": chat_text,
        "audio_url": audio_url,
        "visemes": visemes,
        "emotion": emotion_label
    }

@app.post("/talk")
async def talk(text: str = Form(...), session_id: str = Form("default")):
    result = await process_text_input(text, session_id)
    return JSONResponse(result)

@app.post("/voice")
async def voice(file: UploadFile, session_id: str = Form("default")):
    file_ext = file.filename.split(".")[-1].lower()
    if file_ext not in ["webm", "wav"]:
        raise HTTPException(status_code=400, detail="Only .webm or .wav supported")

    input_path = os.path.join(OUTPUT_DIR, f"input.{file_ext}")
    with open(input_path, "wb") as f:
        f.write(await file.read())

    # Whisper STT
    try:
        transcript = clientSTT.automatic_speech_recognition(
            input_path, model="openai/whisper-large-v3"
        )
        user_text = transcript["text"]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"STT error: {str(e)}")

    result = await process_text_input(user_text, session_id)
    result["user_transcript"] = user_text
    return JSONResponse(result)'''

from fastapi import FastAPI, Form, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
import subprocess, os, uuid, wave, json

from huggingface_hub import InferenceClient
from langchain_google_genai import ChatGoogleGenerativeAI
from google import genai
from google.genai import types

import openai, textwrap

load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve audio/viseme outputs
OUTPUT_DIR = "outputs"
os.makedirs(OUTPUT_DIR, exist_ok=True)
app.mount("/static", StaticFiles(directory=OUTPUT_DIR), name="static")

PORT = 8000

# Hugging Face STT
clientSTT = InferenceClient(
    provider="fal-ai",
    api_key=os.environ["HUGGINGFACEHUB_API_KEY"],
)

# Gemini LLM
llm_google = ChatGoogleGenerativeAI(
    model="gemini-2.5-pro",
    api_key=os.environ["GOOGLE_API_KEY"]
)
client = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])

akash_client = openai.OpenAI(
    api_key=os.environ["AKASHCHAT_API_KEY"],
    base_url=(
        "https://chatapi.akash.network/api/v1"
    )
)

# Store chat history in memory {session_id: [{"role": "user"/"assistant", "content": "..."}]}
chat_histories = {}

def wave_file(filename, pcm, channels=1, rate=24000, sample_width=2):
    """Save PCM data to WAV"""
    with wave.open(filename, "wb") as wf:
        wf.setnchannels(channels)
        wf.setsampwidth(sample_width)
        wf.setframerate(rate)
        wf.writeframes(pcm)

async def process_text_input(text: str, session_id: str):
    """Shared text -> LLM -> TTS -> visemes with memory"""
    print(f"Processing ({session_id}): {text}")

    # Initialize history if not present
    if session_id not in chat_histories:
        chat_histories[session_id] = []

    # Add user message
    chat_histories[session_id].append({"role": "user", "content": text})

    # Keep only last 5 turns
    history = chat_histories[session_id][-10:]

    # Format history for prompt
    conversation = ""
    for turn in history:
        conversation += f"{turn['role'].capitalize()}: {turn['content']}\n"

    prompt = f"""
You are **Dr. Luna**, a compassionate female doctor.
Your style: warm, clear, empathetic.
Tasks:
- Respond in the SAME language that the patient types.
- Suggest home remedies or safe OTC meds if minor.
- If serious, urge the patient to see a local physician.
- Keep responses short (2 - 8 sentences).
- Never say "I am an AI".
- Always reply as Dr. Luna.

Conversation so far:
{conversation}

Now respond to the latest patient input.

At the end of your reply, append:
EMOTION: [happy | neutral | sad | concern]
    """

    try:
        llm_response = llm_google.invoke(prompt)
        akash_response = akash_client.chat.completions.create(
    model="DeepSeek-V3-1",
    messages=[
        {
            "role": "user",
            "content": prompt
        }
    ],
)
        chatOut = textwrap.fill(
    akash_response.choices[0].message.content,
    50
)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"LLM error: {str(e)}")

    # Extract emotion
    if "EMOTION:" in chatOut:
        chat_text, emotion_label = chatOut.rsplit("EMOTION:", 1)
        chat_text = chat_text.strip()
        emotion_label = emotion_label.strip().lower()
        if emotion_label not in ["happy", "neutral", "sad", "concern"]:
            emotion_label = "neutral"
    else:
        chat_text = chatOut.strip()
        emotion_label = "neutral"

    # Save assistant reply to history
    chat_histories[session_id].append({"role": "assistant", "content": chat_text})

    # Generate TTS audio
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash-preview-tts",
            contents=chat_text,
            config=types.GenerateContentConfig(
                response_modalities=["AUDIO"],
                speech_config=types.SpeechConfig(
                    voice_config=types.VoiceConfig(
                        prebuilt_voice_config=types.PrebuiltVoiceConfig(
                            voice_name="Leda"  # Female voice
                        )
                    )
                ),
            ),
        )
        pcm_data = response.candidates[0].content.parts[0].inline_data.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"TTS error: {str(e)}")

    # Save audio + visemes
    file_id = str(uuid.uuid4())
    audio_path = os.path.join(OUTPUT_DIR, f"{file_id}.wav")
    viseme_path = os.path.join(OUTPUT_DIR, f"{file_id}.json")

    wave_file(audio_path, pcm_data)

    try:
        subprocess.run(
            ["rhubarb", "-f", "json", audio_path, "-o", viseme_path],
            check=True
        )
    except subprocess.CalledProcessError:
        raise HTTPException(status_code=500, detail="Viseme generation failed")

    try:
        with open(viseme_path, "r") as f:
            rhubarb_out = json.load(f)
    except Exception:
        raise HTTPException(status_code=500, detail="Viseme JSON read failed")

    visemes = {"mouthCues": rhubarb_out.get("mouthCues", [])}
    audio_url = f"http://localhost:{PORT}/static/{file_id}.wav"

    return {
        "chat": chat_text,
        "audio_url": audio_url,
        "visemes": visemes,
        "emotion": emotion_label
    }

@app.post("/talk")
async def talk(text: str = Form(...), session_id: str = Form("default")):
    result = await process_text_input(text, session_id)
    return JSONResponse(result)

@app.post("/voice")
async def voice(file: UploadFile, session_id: str = Form("default")):
    file_ext = file.filename.split(".")[-1].lower()
    if file_ext not in ["webm", "wav"]:
        raise HTTPException(status_code=400, detail="Only .webm or .wav supported")

    input_path = os.path.join(OUTPUT_DIR, f"input.{file_ext}")
    with open(input_path, "wb") as f:
        f.write(await file.read())

    # Whisper STT
    try:
        transcript = clientSTT.automatic_speech_recognition(
            input_path, model="openai/whisper-large-v3"
        )
        user_text = transcript["text"]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"STT error: {str(e)}")

    result = await process_text_input(user_text, session_id)
    result["user_transcript"] = user_text
    return JSONResponse(result)
