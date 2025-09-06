import React, { useState, useRef } from "react";
import Avatar from "./Avatar"; // Import the Avatar component

export default function ChatUI() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunksRef = useRef([]);

  const [avatarData, setAvatarData] = useState({
    audio_url: null,
    visemes: null,
    emotion: "neutral",
  });

  const API_BASE = "http://localhost:8000";

  const processApiResponse = (data) => {
    setAvatarData({
      audio_url: data.audio_url,
      visemes: data.visemes,
      emotion: data.emotion,
    });
  };

  const handleSendText = async (e) => {
    e.preventDefault();
    const text = e.target.elements.userText.value;
    if (!text) return;
    setLoading(true);
    setError(null);
    setChatHistory((prev) => [...prev, { from: "user", msg: text }]);

    try {
      const res = await fetch(`${API_BASE}/talk`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ text }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();

      setChatHistory((prev) => [
        ...prev,
        { from: "ai", msg: data.chat, emotion: data.emotion },
      ]);
      processApiResponse(data);
    } catch (err) {
      setError(`Text error: ${err.message}`);
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : "audio/wav";
      const recorder = new MediaRecorder(stream, { mimeType });
      setMediaRecorder(recorder);
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      recorder.start();
    } catch (err) {
      setError(`Mic error: ${err.message}`);
    }
  };

  const stopRecording = async () => {
    if (!mediaRecorder) return;
    mediaRecorder.stop();

    mediaRecorder.onstop = async () => {
      const mimeType = mediaRecorder.mimeType;
      const fileExt = mimeType.includes("wav") ? "wav" : "webm";
      const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
      const formData = new FormData();
      formData.append("file", audioBlob, `input.${fileExt}`);

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE}/voice`, {
          method: "POST",
          body: formData,
        });
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();

        setChatHistory((prev) => [
          ...prev,
          { from: "user", msg: data.user_transcript || "Voice input" },
          { from: "ai", msg: data.chat, emotion: data.emotion },
        ]);
        processApiResponse(data);
      } catch (err) {
        setError(`Voice error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
  };

  return (
    <div style={styles.mainContainer}>
      {/* LEFT: 3D Avatar Container */}
      <div style={styles.avatarContainer}>
        <div style={styles.avatarCanvasWrapper}>
          <Avatar
            audioUrl={avatarData.audio_url}
            visemes={avatarData.visemes}
            emotion={avatarData.emotion}
          />
        </div>
      </div>

      {/* RIGHT: Chat UI */}
      <div style={styles.chatContainer}>
        <h2 style={styles.title}>AI Companion</h2>

        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}

        <div style={styles.chatHistory}>
          {chatHistory.map((c, i) => (
            <div
              key={i}
              style={
                c.from === "user"
                  ? styles.userMessageContainer
                  : styles.aiMessageContainer
              }
            >
              <div
                style={
                  c.from === "user" ? styles.userMessage : styles.aiMessage
                }
              >
                <p style={styles.messageSender}>{c.from}</p>
                <p>{c.msg}</p>
                {c.emotion && (
                  <p style={styles.emotionText}>Emotion: {c.emotion}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendText} style={styles.form}>
          <input
            type="text"
            name="userText"
            placeholder="Type here..."
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.sendButton}
            disabled={loading}
          >
            Send
          </button>
        </form>

        <button
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          style={{
            ...styles.micButton,
            ...(mediaRecorder?.state === "recording" ? styles.recording : {}),
          }}
          disabled={loading}
        >
          🎤 Hold to Speak
        </button>

        {loading && <p style={styles.loading}>Processing...</p>}
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#1F2937", // bg-gray-800
    color: "#FFFFFF",
  },
  avatarContainer: {
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url('/background.jpg')`, // Add background image
    backgroundSize: "cover", // Cover the container
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent tiling
    overflow: "hidden",
    position: "relative", // Ensure proper positioning context
  },
  avatarCanvasWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chatContainer: {
    width: "50%", // w-1/2
    padding: "1rem", // p-4
    backgroundColor: "#111827", // bg-gray-900
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #374151", // border-l border-gray-700
  },
  title: {
    fontSize: "1.5rem", // text-2xl
    fontWeight: "bold",
    marginBottom: "1rem", // mb-4
  },
  error: {
    backgroundColor: "#EF4444", // bg-red-500
    color: "#FFFFFF",
    padding: "0.5rem", // p-2
    borderRadius: "0.25rem", // rounded
    marginBottom: "0.5rem", // mb-2
  },
  chatHistory: {
    flex: 1,
    overflowY: "auto",
    marginBottom: "1rem", // mb-4
    padding: "0.5rem", // p-2
    backgroundColor: "#1F2937", // bg-gray-800
    border: "1px solid #374151", // border border-gray-700
    borderRadius: "0.25rem", // rounded
  },
  userMessageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "1rem", // mb-4
  },
  aiMessageContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "1rem", // mb-4
  },
  userMessage: {
    padding: "0.75rem", // p-3
    borderRadius: "0.5rem", // rounded-lg
    maxWidth: "20rem", // max-w-md
    backgroundColor: "#2563EB", // bg-blue-600
  },
  aiMessage: {
    padding: "0.75rem", // p-3
    borderRadius: "0.5rem", // rounded-lg
    maxWidth: "20rem", // max-w-md
    backgroundColor: "#374151", // bg-gray-700
  },
  messageSender: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  emotionText: {
    fontSize: "0.75rem", // text-xs
    color: "#9CA3AF", // text-gray-400
    marginTop: "0.25rem", // mt-1
  },
  form: {
    display: "flex",
    marginBottom: "0.5rem", // mb-2
  },
  input: {
    flex: 1,
    padding: "0.5rem", // p-2
    border: "1px solid #374151", // border border-gray-700
    borderRadius: "0.25rem 0 0 0.25rem", // rounded-l
    backgroundColor: "#1F2937", // bg-gray-800
    color: "#FFFFFF",
    outline: "none",
  },
  sendButton: {
    backgroundColor: "#2563EB", // bg-blue-600
    color: "#FFFFFF",
    padding: "0.5rem 1rem", // px-4 py-2
    borderRadius: "0 0.25rem 0.25rem 0", // rounded-r
    cursor: "pointer",
  },
  micButton: {
    width: "100%",
    backgroundColor: "#16A34A", // bg-green-600
    color: "#FFFFFF",
    padding: "0.5rem 1rem", // px-4 py-2
    borderRadius: "0.25rem", // rounded
    cursor: "pointer",
  },
  recording: {
    backgroundColor: "#DC2626", // bg-red-600
  },
  loading: {
    marginTop: "0.5rem", // mt-2
    color: "#6B7280", // text-gray-500
  },
};