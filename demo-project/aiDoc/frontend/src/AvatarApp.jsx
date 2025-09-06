// import React, { useState, useRef } from "react";
// import Avatar from "./Avatar"; // Import the Avatar component

// export default function ChatUI() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const audioChunksRef = useRef([]);

//   const [avatarData, setAvatarData] = useState({
//     audio_url: null,
//     visemes: null,
//     emotion: "neutral",
//   });

//   const API_BASE = "http://localhost:8000";

//   const processApiResponse = (data) => {
//     setAvatarData({
//       audio_url: data.audio_url,
//       visemes: data.visemes,
//       emotion: data.emotion,
//     });
//   };

//   const handleSendText = async (e) => {
//     e.preventDefault();
//     const text = e.target.elements.userText.value;
//     if (!text) return;
//     setLoading(true);
//     setError(null);
//     setChatHistory((prev) => [...prev, { from: "user", msg: text }]);

//     try {
//       const res = await fetch(`${API_BASE}/talk`, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({ text }),
//       });
//       if (!res.ok) throw new Error(await res.text());
//       const data = await res.json();

//       setChatHistory((prev) => [
//         ...prev,
//         { from: "ai", msg: data.chat, emotion: data.emotion },
//       ]);
//       processApiResponse(data);
//     } catch (err) {
//       setError(`Text error: ${err.message}`);
//     } finally {
//       setLoading(false);
//       e.target.reset();
//     }
//   };

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const mimeType = MediaRecorder.isTypeSupported("audio/webm")
//         ? "audio/webm"
//         : "audio/wav";
//       const recorder = new MediaRecorder(stream, { mimeType });
//       setMediaRecorder(recorder);
//       audioChunksRef.current = [];

//       recorder.ondataavailable = (e) => {
//         if (e.data.size > 0) audioChunksRef.current.push(e.data);
//       };
//       recorder.start();
//     } catch (err) {
//       setError(`Mic error: ${err.message}`);
//     }
//   };

//   const stopRecording = async () => {
//     if (!mediaRecorder) return;
//     mediaRecorder.stop();

//     mediaRecorder.onstop = async () => {
//       const mimeType = mediaRecorder.mimeType;
//       const fileExt = mimeType.includes("wav") ? "wav" : "webm";
//       const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
//       const formData = new FormData();
//       formData.append("file", audioBlob, `input.${fileExt}`);

//       setLoading(true);
//       setError(null);

//       try {
//         const res = await fetch(`${API_BASE}/voice`, {
//           method: "POST",
//           body: formData,
//         });
//         if (!res.ok) throw new Error(await res.text());
//         const data = await res.json();

//         setChatHistory((prev) => [
//           ...prev,
//           { from: "user", msg: data.user_transcript || "Voice input" },
//           { from: "ai", msg: data.chat, emotion: data.emotion },
//         ]);
//         processApiResponse(data);
//       } catch (err) {
//         setError(`Voice error: ${err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };
//   };

//   return (
//     <div style={styles.mainContainer}>
//       {/* LEFT: 3D Avatar Container */}
//       <div style={styles.avatarContainer}>
//         <div style={styles.avatarCanvasWrapper}>
//           <Avatar
//             audioUrl={avatarData.audio_url}
//             visemes={avatarData.visemes}
//             emotion={avatarData.emotion}
//           />
//         </div>
//       </div>

//       {/* RIGHT: Chat UI */}
//       <div style={styles.chatContainer}>
//         <h2 style={styles.title}>AI Companion</h2>

//         {error && (
//           <div style={styles.error}>
//             {error}
//           </div>
//         )}

//         <div style={styles.chatHistory}>
//           {chatHistory.map((c, i) => (
//             <div
//               key={i}
//               style={
//                 c.from === "user"
//                   ? styles.userMessageContainer
//                   : styles.aiMessageContainer
//               }
//             >
//               <div
//                 style={
//                   c.from === "user" ? styles.userMessage : styles.aiMessage
//                 }
//               >
//                 <p style={styles.messageSender}>{c.from}</p>
//                 <p>{c.msg}</p>
//                 {c.emotion && (
//                   <p style={styles.emotionText}>Emotion: {c.emotion}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <form onSubmit={handleSendText} style={styles.form}>
//           <input
//             type="text"
//             name="userText"
//             placeholder="Type here..."
//             style={styles.input}
//           />
//           <button
//             type="submit"
//             style={styles.sendButton}
//             disabled={loading}
//           >
//             Send
//           </button>
//         </form>

//         <button
//           onMouseDown={startRecording}
//           onMouseUp={stopRecording}
//           style={{
//             ...styles.micButton,
//             ...(mediaRecorder?.state === "recording" ? styles.recording : {}),
//           }}
//           disabled={loading}
//         >
//           🎤 Hold to Speak
//         </button>

//         {loading && <p style={styles.loading}>Processing...</p>}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   mainContainer: {
//     display: "flex",
//     height: "100vh",
//     width: "100vw",
//     backgroundColor: "#1F2937", // bg-gray-800
//     color: "#FFFFFF",
//   },
//   avatarContainer: {
//     flex: 1,
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundImage: `url('/background.jpg')`, // Add background image
//     backgroundSize: "cover", // Cover the container
//     backgroundPosition: "center", // Center the image
//     backgroundRepeat: "no-repeat", // Prevent tiling
//     overflow: "hidden",
//     position: "relative", // Ensure proper positioning context
//   },
//   avatarCanvasWrapper: {
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   chatContainer: {
//     width: "50%", // w-1/2
//     padding: "1rem", // p-4
//     backgroundColor: "#111827", // bg-gray-900
//     display: "flex",
//     flexDirection: "column",
//     borderLeft: "1px solid #374151", // border-l border-gray-700
//   },
//   title: {
//     fontSize: "1.5rem", // text-2xl
//     fontWeight: "bold",
//     marginBottom: "1rem", // mb-4
//   },
//   error: {
//     backgroundColor: "#EF4444", // bg-red-500
//     color: "#FFFFFF",
//     padding: "0.5rem", // p-2
//     borderRadius: "0.25rem", // rounded
//     marginBottom: "0.5rem", // mb-2
//   },
//   chatHistory: {
//     flex: 1,
//     overflowY: "auto",
//     marginBottom: "1rem", // mb-4
//     padding: "0.5rem", // p-2
//     backgroundColor: "#1F2937", // bg-gray-800
//     border: "1px solid #374151", // border border-gray-700
//     borderRadius: "0.25rem", // rounded
//   },
//   userMessageContainer: {
//     display: "flex",
//     justifyContent: "flex-end",
//     marginBottom: "1rem", // mb-4
//   },
//   aiMessageContainer: {
//     display: "flex",
//     justifyContent: "flex-start",
//     marginBottom: "1rem", // mb-4
//   },
//   userMessage: {
//     padding: "0.75rem", // p-3
//     borderRadius: "0.5rem", // rounded-lg
//     maxWidth: "20rem", // max-w-md
//     backgroundColor: "#2563EB", // bg-blue-600
//   },
//   aiMessage: {
//     padding: "0.75rem", // p-3
//     borderRadius: "0.5rem", // rounded-lg
//     maxWidth: "20rem", // max-w-md
//     backgroundColor: "#374151", // bg-gray-700
//   },
//   messageSender: {
//     fontWeight: "bold",
//     textTransform: "capitalize",
//   },
//   emotionText: {
//     fontSize: "0.75rem", // text-xs
//     color: "#9CA3AF", // text-gray-400
//     marginTop: "0.25rem", // mt-1
//   },
//   form: {
//     display: "flex",
//     marginBottom: "0.5rem", // mb-2
//   },
//   input: {
//     flex: 1,
//     padding: "0.5rem", // p-2
//     border: "1px solid #374151", // border border-gray-700
//     borderRadius: "0.25rem 0 0 0.25rem", // rounded-l
//     backgroundColor: "#1F2937", // bg-gray-800
//     color: "#FFFFFF",
//     outline: "none",
//   },
//   sendButton: {
//     backgroundColor: "#2563EB", // bg-blue-600
//     color: "#FFFFFF",
//     padding: "0.5rem 1rem", // px-4 py-2
//     borderRadius: "0 0.25rem 0.25rem 0", // rounded-r
//     cursor: "pointer",
//   },
//   micButton: {
//     width: "100%",
//     backgroundColor: "#16A34A", // bg-green-600
//     color: "#FFFFFF",
//     padding: "0.5rem 1rem", // px-4 py-2
//     borderRadius: "0.25rem", // rounded
//     cursor: "pointer",
//   },
//   recording: {
//     backgroundColor: "#DC2626", // bg-red-600
//   },
//   loading: {
//     marginTop: "0.5rem", // mt-2
//     color: "#6B7280", // text-gray-500
//   },
// };
// import React, { useState, useRef } from "react";
// import Avatar from "./Avatar"; // Import the Avatar component

// export default function ChatUI() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const audioChunksRef = useRef([]);

//   const [avatarData, setAvatarData] = useState({
//     audio_url: null,
//     visemes: null,
//     emotion: "neutral",
//   });

//   const API_BASE = "http://localhost:8000";

//   const processApiResponse = (data) => {
//     setAvatarData({
//       audio_url: data.audio_url,
//       visemes: data.visemes,
//       emotion: data.emotion,
//     });
//   };

//   const handleSendText = async (e) => {
//     e.preventDefault();
//     const text = e.target.elements.userText.value;
//     if (!text) return;
//     setLoading(true);
//     setError(null);
//     setChatHistory((prev) => [...prev, { from: "user", msg: text }]);

//     try {
//       const res = await fetch(`${API_BASE}/talk`, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams({ text }),
//       });
//       if (!res.ok) throw new Error(await res.text());
//       const data = await res.json();

//       setChatHistory((prev) => [
//         ...prev,
//         { from: "ai", msg: data.chat, emotion: data.emotion },
//       ]);
//       processApiResponse(data);
//     } catch (err) {
//       setError(`Text error: ${err.message}`);
//     } finally {
//       setLoading(false);
//       e.target.reset();
//     }
//   };

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const mimeType = MediaRecorder.isTypeSupported("audio/webm")
//         ? "audio/webm"
//         : "audio/wav";
//       const recorder = new MediaRecorder(stream, { mimeType });
//       setMediaRecorder(recorder);
//       audioChunksRef.current = [];

//       recorder.ondataavailable = (e) => {
//         if (e.data.size > 0) audioChunksRef.current.push(e.data);
//       };
//       recorder.start();
//     } catch (err) {
//       setError(`Mic error: ${err.message}`);
//     }
//   };

//   const stopRecording = async () => {
//     if (!mediaRecorder) return;
//     mediaRecorder.stop();

//     mediaRecorder.onstop = async () => {
//       const mimeType = mediaRecorder.mimeType;
//       const fileExt = mimeType.includes("wav") ? "wav" : "webm";
//       const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
//       const formData = new FormData();
//       formData.append("file", audioBlob, `input.${fileExt}`);

//       setLoading(true);
//       setError(null);

//       try {
//         const res = await fetch(`${API_BASE}/voice`, {
//           method: "POST",
//           body: formData,
//         });
//         if (!res.ok) throw new Error(await res.text());
//         const data = await res.json();

//         setChatHistory((prev) => [
//           ...prev,
//           { from: "user", msg: data.user_transcript || "Voice input" },
//           { from: "ai", msg: data.chat, emotion: data.emotion },
//         ]);
//         processApiResponse(data);
//       } catch (err) {
//         setError(`Voice error: ${err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };
//   };

//   return (
//     <div style={styles.mainContainer}>
//       {/* LEFT: 3D Avatar Container */}
//       <div style={styles.avatarContainer}>
//         <div style={styles.avatarCanvasWrapper}>
//           <Avatar
//             audioUrl={avatarData.audio_url}
//             visemes={avatarData.visemes}
//             emotion={avatarData.emotion}
//           />
//         </div>
//       </div>

//       {/* RIGHT: Chat UI */}
//       <div style={styles.chatContainer}>
//         <h2 style={styles.title}>DOC-AI</h2>

//         {error && (
//           <div style={styles.error}>
//             {error}
//           </div>
//         )}

//         <div style={styles.chatHistory}>
//           {chatHistory.map((c, i) => (
//             <div
//               key={i}
//               style={
//                 c.from === "user"
//                   ? styles.userMessageContainer
//                   : styles.aiMessageContainer
//               }
//             >
//               <div
//                 style={
//                   c.from === "user" ? styles.userMessage : styles.aiMessage
//                 }
//               >
//                 <p style={styles.messageSender}>{c.from}</p>
//                 <p>{c.msg}</p>
//                 {c.emotion && (
//                   <p style={styles.emotionText}>Emotion: {c.emotion}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         <form onSubmit={handleSendText} style={styles.form}>
//           <input
//             type="text"
//             name="userText"
//             placeholder="Type here..."
//             style={styles.input}
//           />
//           <button
//             type="submit"
//             style={styles.sendButton}
//             disabled={loading}
//           >
//             Send
//           </button>
//         </form>

//         <button
//           onMouseDown={startRecording}
//           onMouseUp={stopRecording}
//           style={{
//             ...styles.micButton,
//             ...(mediaRecorder?.state === "recording" ? styles.recording : {}),
//           }}
//           disabled={loading}
//         >
//           🎤 Hold to Speak
//         </button>

//         {loading && <p style={styles.loading}>Processing...</p>}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   mainContainer: {
//     display: "flex",
//     height: "100vh",
//     width: "100vw",
//     backgroundColor: "#1F2937", // bg-gray-800
//     color: "#FFFFFF",
//   },
//   avatarContainer: {
//     flex: 1,
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundImage: `url('/background.jpg')`, // Add background image
//     backgroundSize: "cover", // Cover the container
//     backgroundPosition: "center", // Center the image
//     backgroundRepeat: "no-repeat", // Prevent tiling
//     overflow: "hidden",
//     position: "relative", // Ensure proper positioning context
//   },
//   avatarCanvasWrapper: {
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   chatContainer: {
//     width: "50%", // w-1/2
//     padding: "1rem", // p-4
//     backgroundColor: "#111827", // bg-gray-900
//     display: "flex",
//     flexDirection: "column",
//     borderLeft: "1px solid #374151", // border-l border-gray-700
//   },
//   title: {
//     fontSize: "1.5rem", // text-2xl
//     fontWeight: "bold",
//     marginBottom: "1rem", // mb-4
//   },
//   error: {
//     backgroundColor: "#EF4444", // bg-red-500
//     color: "#FFFFFF",
//     padding: "0.5rem", // p-2
//     borderRadius: "0.25rem", // rounded
//     marginBottom: "0.5rem", // mb-2
//   },
//   chatHistory: {
//     flex: 1,
//     overflowY: "auto",
//     marginBottom: "1rem", // mb-4
//     padding: "0.5rem", // p-2
//     backgroundColor: "#1F2937", // bg-gray-800
//     border: "1px solid #374151", // border border-gray-700
//     borderRadius: "0.25rem", // rounded
//   },
//   userMessageContainer: {
//     display: "flex",
//     justifyContent: "flex-end",
//     marginBottom: "1rem", // mb-4
//   },
//   aiMessageContainer: {
//     display: "flex",
//     justifyContent: "flex-start",
//     marginBottom: "1rem", // mb-4
//   },
//   userMessage: {
//     padding: "0.75rem", // p-3
//     borderRadius: "0.5rem", // rounded-lg
//     maxWidth: "20rem", // max-w-md
//     backgroundColor: "#2563EB", // bg-blue-600
//   },
//   aiMessage: {
//     padding: "0.75rem", // p-3
//     borderRadius: "0.5rem", // rounded-lg
//     maxWidth: "20rem", // max-w-md
//     backgroundColor: "#374151", // bg-gray-700
//   },
//   messageSender: {
//     fontWeight: "bold",
//     textTransform: "capitalize",
//   },
//   emotionText: {
//     fontSize: "0.75rem", // text-xs
//     color: "#9CA3AF", // text-gray-400
//     marginTop: "0.25rem", // mt-1
//   },
//   form: {
//     display: "flex",
//     marginBottom: "0.5rem", // mb-2
//   },
//   input: {
//     flex: 1,
//     padding: "0.5rem", // p-2
//     border: "1px solid #374151", // border border-gray-700
//     borderRadius: "0.25rem 0 0 0.25rem", // rounded-l
//     backgroundColor: "#1F2937", // bg-gray-800
//     color: "#FFFFFF",
//     outline: "none",
//   },
//   sendButton: {
//     backgroundColor: "#2563EB", // bg-blue-600
//     color: "#FFFFFF",
//     padding: "0.5rem 1rem", // px-4 py-2
//     borderRadius: "0 0.25rem 0.25rem 0", // rounded-r
//     cursor: "pointer",
//   },
//   micButton: {
//     width: "100%",
//     backgroundColor: "#16A34A", // bg-green-600
//     color: "#FFFFFF",
//     padding: "0.5rem 1rem", // px-4 py-2
//     borderRadius: "0.25rem", // rounded
//     cursor: "pointer",
//   },
//   recording: {
//     backgroundColor: "#DC2626", // bg-red-600
//   },
//   loading: {
//     marginTop: "0.5rem", // mt-2
//     color: "#6B7280", // text-gray-500
//   },
// };

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
        <div style={styles.headerSection}>
          <h2 style={styles.title}>DOC-AI Chat</h2>
          <div style={styles.subtitle}>
            <span style={{ color: '#7C3AED' }}>Care.</span>
            <span style={{ color: '#4338CA', marginLeft: '0.25rem' }}>Connect.</span>
            <span style={{ color: '#0F766E', marginLeft: '0.25rem' }}>Cure.</span>
          </div>
        </div>

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
                <p style={styles.messageText}>{c.msg}</p>
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
            placeholder="Type your message here..."
            style={styles.input}
          />
          <button
            type="submit"
            style={{
              ...styles.sendButton,
              ...(loading ? styles.buttonDisabled : {})
            }}
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
            ...(loading ? styles.buttonDisabled : {})
          }}
          disabled={loading}
        >
          🎤 Hold to Speak
        </button>

        {loading && <p style={styles.loading}>Processing your request...</p>}
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #F3E8FF 0%, #EEF2FF 25%, #F0FDFA 50%, #E0F2FE 75%, #F0F9FF 100%)",
    overflow: "hidden",
  },
  avatarContainer: {
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url('/background.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    position: "relative",
    borderRight: "2px solid #8B5CF6",
    boxShadow: "inset -10px 0 20px -10px rgba(139, 92, 246, 0.3)",
  },
  avatarCanvasWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chatContainer: {
    width: "50%",
    padding: "1.5rem",
    background: "linear-gradient(135deg, #FDFBFF 0%, #F8FAFC 25%, #F0FDFA 50%, #F0F9FF 100%)",
    display: "flex",
    flexDirection: "column",
    borderLeft: "2px solid #8B5CF6",
    boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
    position: "relative",
    overflow: "hidden",
  },
  headerSection: {
    marginBottom: "1.5rem",
    textAlign: "center",
    position: "relative",
    padding: "1rem",
    background: "linear-gradient(135deg, #F3E8FF 0%, #EEF2FF 50%, #F0FDFA 100%)",
    borderRadius: "1rem",
    border: "2px solid #D8B4FE",
    boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.2)",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #7C3AED 0%, #4338CA 50%, #0F766E 100%)",
    backgroundClip: "text",
    color: "transparent",
    marginBottom: "0.5rem",
    textShadow: "0 2px 4px rgba(139, 92, 246, 0.1)",
  },
  subtitle: {
    fontSize: "0.875rem",
    fontWeight: "600",
    letterSpacing: "0.05em",
    opacity: 0.8,
  },
  error: {
    background: "linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)",
    color: "#991B1B",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    marginBottom: "1rem",
    border: "2px solid #F87171",
    boxShadow: "0 4px 6px -1px rgba(239, 68, 68, 0.1)",
    fontWeight: "500",
  },
  chatHistory: {
    flex: 1,
    overflowY: "auto",
    marginBottom: "1.5rem",
    padding: "1rem",
    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F0FDFA 100%)",
    border: "2px solid #D8B4FE",
    borderRadius: "1rem",
    boxShadow: "inset 0 2px 4px 0 rgba(139, 92, 246, 0.06), 0 4px 6px -1px rgba(139, 92, 246, 0.1)",
  },
  userMessageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "1rem",
  },
  aiMessageContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "1rem",
  },
  userMessage: {
    padding: "1rem 1.25rem",
    borderRadius: "1.25rem 1.25rem 0.5rem 1.25rem",
    maxWidth: "20rem",
    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%)",
    color: "#FFFFFF",
    border: "2px solid #A855F7",
    boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.05)",
    position: "relative",
  },
  aiMessage: {
    padding: "1rem 1.25rem",
    borderRadius: "1.25rem 1.25rem 1.25rem 0.5rem",
    maxWidth: "20rem",
    background: "linear-gradient(135deg, #F3E8FF 0%, #EDE9FE 50%, #E0F2FE 100%)",
    color: "#4C1D95",
    border: "2px solid #D8B4FE",
    boxShadow: "0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06)",
  },
  messageSender: {
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: "0.25rem",
    fontSize: "0.75rem",
    opacity: 0.8,
  },
  messageText: {
    margin: 0,
    lineHeight: "1.5",
  },
  emotionText: {
    fontSize: "0.75rem",
    opacity: 0.7,
    marginTop: "0.5rem",
    fontStyle: "italic",
  },
  form: {
    display: "flex",
    marginBottom: "1rem",
    gap: "0.5rem",
  },
  input: {
    flex: 1,
    padding: "0.875rem 1.25rem",
    border: "2px solid #D8B4FE",
    borderRadius: "0.75rem",
    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
    color: "#4C1D95",
    outline: "none",
    fontSize: "1rem",
    boxShadow: "0 2px 4px 0 rgba(139, 92, 246, 0.06)",
    transition: "all 0.3s ease",
  },
  sendButton: {
    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6366F1 100%)",
    color: "#FFFFFF",
    padding: "0.875rem 1.5rem",
    borderRadius: "0.75rem",
    border: "2px solid #A855F7",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 4px 6px -1px rgba(139, 92, 246, 0.25), 0 2px 4px -1px rgba(139, 92, 246, 0.06)",
    transition: "all 0.3s ease",
    fontSize: "1rem",
  },
  micButton: {
    width: "100%",
    background: "linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)",
    color: "#FFFFFF",
    padding: "1rem 1.5rem",
    borderRadius: "0.75rem",
    border: "2px solid #34D399",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.25), 0 2px 4px -1px rgba(16, 185, 129, 0.06)",
    transition: "all 0.3s ease",
    fontSize: "1rem",
  },
  recording: {
    background: "linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)",
    border: "2px solid #F87171",
    boxShadow: "0 4px 6px -1px rgba(239, 68, 68, 0.25), 0 2px 4px -1px rgba(239, 68, 68, 0.06)",
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  loading: {
    marginTop: "1rem",
    color: "#8B5CF6",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "1rem",
    background: "linear-gradient(135deg, #F3E8FF 0%, #EDE9FE 100%)",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    border: "1px solid #D8B4FE",
  },
};