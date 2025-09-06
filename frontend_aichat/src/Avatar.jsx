import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

// Viseme map for mouth movements (aligned with developer's corresponding map)
const visemeMap = {
  A: "viseme_PP",   // For open-mouth sounds like 'ah'
  B: "viseme_kk",   // For closed-lip sounds like 'b', 'm', 'p'
  C: "viseme_I",    // For wide sounds like 'e', 'g', 'k'
  D: "viseme_AA",   // For sounds like 'th', 'l'
  E: "viseme_O",    // For sounds like 'eh', 'ae'
  F: "viseme_U",    // For sounds like 'ooh', 'w'
  G: "viseme_FF",   // Generic, can reuse
  H: "viseme_TH",   // Generic, can reuse
  X: "viseme_PP",   // The resting/silent state
};

// Facial expressions (inspired by developer's code, extended with more options)
const facialExpressions = {
  default: {},
  happy: {
    mouthSmileLeft: 0.35,
    mouthSmileRight: 0.35,
    eyeSquintLeft: 0.4,
    eyeSquintRight: 0.4,
  },
  sad: {
    mouthFrownLeft: 0.7,
    mouthFrownRight: 0.7,
    eyeLookDownLeft: 0.5,
    eyeLookDownRight: 0.5,
  },
  neutral: {},
  smile: {
    browInnerUp: 0.17,
    eyeSquintLeft: 0.4,
    eyeSquintRight: 0.44,
    mouthPressLeft: 0.61,
    mouthPressRight: 0.41,
  },
  surprised: {
    eyeWideLeft: 0.5,
    eyeWideRight: 0.5,
    jawOpen: 0.351,
    mouthFunnel: 1,
    browInnerUp: 1,
  },
};

function Model({ audioUrl, visemes, emotion, message }) {
  const { nodes } = useGLTF("/avatar.glb");
  const { animations } = useGLTF("/models/animations.glb");
  const group = useRef();
  const audioRef = useRef();
  const [currentViseme, setCurrentViseme] = useState({ value: "X", start: 0 });
  const [blink, setBlink] = useState(false);
  const [animation, setAnimation] = useState("Idle");
  const [facialExpression, setFacialExpression] = useState("neutral");
  const { actions, mixer } = useAnimations(animations, group);

  // Handle intro speech and viseme on mount
  useEffect(() => {
    fetch("/intro_viseme.json")
      .then((response) => response.json())
      .then((introVisemes) => {
        const introAudio = new Audio("/intro.wav");
        audioRef.current = introAudio;
        setAnimation("Idle"); // Keep animation as Idle
        introAudio.play();
        introAudio.onended = () => {
          setAnimation("Idle"); // Ensure Idle after intro
          audioRef.current = null;
        };

        // Lip-sync with intro visemes
        const sync = () => {
          const time = introAudio.currentTime;
          const current = introVisemes.mouthCues.find(
            (v) => time >= v.start && time <= v.end
          );
          if (current) {
            setCurrentViseme(current);
          } else if (time > introVisemes.mouthCues[introVisemes.mouthCues.length - 1].end) {
            setCurrentViseme({ value: "X", start: time });
          }
          if (!introAudio.paused) {
            requestAnimationFrame(sync);
          }
        };
        sync();

        // Blink during intro speech
        const blinkInterval = setInterval(() => {
          if (!introAudio.paused) {
            setBlink(true);
            setTimeout(() => setBlink(false), 200); // 200ms blink
          }
        }, 1000); // Blink every 1 second during speech

        return () => {
          introAudio.pause();
          clearInterval(blinkInterval);
        };
      })
      .catch((error) => console.error("Error loading intro viseme:", error));
  }, []); // Empty dependency array ensures this runs once on mount

  // Handle animation and expression from message or fallback props
  useEffect(() => {
    if (message) {
      const audio = new Audio("data:audio/mp3;base64," + message.audio);
      audioRef.current = audio;
      setAnimation("Talking"); // Start Talking animation
      audio.play();
      setFacialExpression(message.emotion || "neutral");
      audio.onended = () => {
        if (message.onMessagePlayed) message.onMessagePlayed();
        setAnimation("Idle"); // Stop Talking, revert to Idle
        audioRef.current = null;
      };
    } else if (audioUrl && visemes?.mouthCues?.length) {
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      setAnimation("Talking"); // Start Talking animation
      audio.play();
      audio.onended = () => {
        setAnimation("Idle"); // Stop Talking, revert to Idle
        audioRef.current = null;
      };
    }
  }, [message, audioUrl, visemes]);

  // Sync animation
  useEffect(() => {
    const action = actions[animation];
    if (action) {
      action.reset().fadeIn(mixer.stats.actions.inUse === 0 ? 0 : 0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [animation, actions, mixer]);

  // Lip-sync and blinking synchronization
  useEffect(() => {
    if ((message && message.lipsync) || (audioUrl && visemes?.mouthCues?.length) || audioRef.current) {
      const audio = audioRef.current;
      const lipsync = message ? message.lipsync : visemes;

      const sync = () => {
        const time = audio.currentTime;
        const current = lipsync?.mouthCues?.find(
          (v) => time >= v.start && time <= v.end
        );
        if (current) {
          setCurrentViseme(current);
        } else if (time > (lipsync?.mouthCues?.[lipsync.mouthCues.length - 1]?.end || 0)) {
          setCurrentViseme({ value: "X", start: time });
        }
        if (!audio.paused) {
          requestAnimationFrame(sync);
        }
      };
      sync();

      // Blink during speech
      const blinkInterval = setInterval(() => {
        if (!audio.paused) {
          setBlink(true);
          setTimeout(() => setBlink(false), 200); // 200ms blink
        }
      }, 1000); // Blink every 1 second during speech

      return () => {
        audio.pause();
        clearInterval(blinkInterval);
      };
    }
  }, [message, audioUrl, visemes]);

  useFrame(() => {
    if (
      !nodes.Wolf3D_Head?.morphTargetDictionary ||
      !nodes.Wolf3D_Head.morphTargetInfluences ||
      !nodes.Wolf3D_Teeth?.morphTargetInfluences
    ) {
      return;
    }

    // Reset all morph targets to 0
    const dictionary = nodes.Wolf3D_Head.morphTargetDictionary;
    Object.keys(dictionary).forEach((key) => {
      const index = dictionary[key];
      nodes.Wolf3D_Head.morphTargetInfluences[index] = THREE.MathUtils.lerp(
        nodes.Wolf3D_Head.morphTargetInfluences[index],
        0,
        0.2
      );
      if (nodes.Wolf3D_Teeth.morphTargetInfluences[index] !== undefined) {
        nodes.Wolf3D_Teeth.morphTargetInfluences[index] = THREE.MathUtils.lerp(
          nodes.Wolf3D_Teeth.morphTargetInfluences[index],
          0,
          0.2
        );
      }
    });

    // Apply blinking
    lerpMorphTarget("eyeBlinkLeft", blink ? 1 : 0, 0.5);
    lerpMorphTarget("eyeBlinkRight", blink ? 1 : 0, 0.5);

    // Apply facial expression
    const expression = facialExpressions[facialExpression] || facialExpressions.neutral;
    Object.entries(expression).forEach(([key, value]) => {
      const index = dictionary[key];
      if (index !== undefined) {
        nodes.Wolf3D_Head.morphTargetInfluences[index] = THREE.MathUtils.lerp(
          nodes.Wolf3D_Head.morphTargetInfluences[index],
          value,
          0.1
        );
        if (nodes.Wolf3D_Teeth.morphTargetInfluences[index] !== undefined) {
          nodes.Wolf3D_Teeth.morphTargetInfluences[index] = THREE.MathUtils.lerp(
            nodes.Wolf3D_Teeth.morphTargetInfluences[index],
            value,
            0.1
          );
        }
      }
    });

    // Apply viseme
    const target = visemeMap[currentViseme.value];
    if (target) {
      const index = dictionary[target];
      if (index !== undefined) {
        nodes.Wolf3D_Head.morphTargetInfluences[index] = THREE.MathUtils.lerp(
          nodes.Wolf3D_Head.morphTargetInfluences[index],
          1,
          0.3
        );
        if (nodes.Wolf3D_Teeth.morphTargetInfluences[index] !== undefined) {
          nodes.Wolf3D_Teeth.morphTargetInfluences[index] = THREE.MathUtils.lerp(
            nodes.Wolf3D_Teeth.morphTargetInfluences[index],
            1,
            0.3
          );
        }
      } else {
        console.warn(`Morph target "${target}" not found in dictionary`);
      }
    }
  });

  // Helper function to lerp morph targets
  const lerpMorphTarget = (target, value, speed = 0.1) => {
    const index = nodes.Wolf3D_Head.morphTargetDictionary[target];
    if (index !== undefined) {
      nodes.Wolf3D_Head.morphTargetInfluences[index] = THREE.MathUtils.lerp(
        nodes.Wolf3D_Head.morphTargetInfluences[index],
        value,
        speed
      );
      if (nodes.Wolf3D_Teeth.morphTargetInfluences[index] !== undefined) {
        nodes.Wolf3D_Teeth.morphTargetInfluences[index] = THREE.MathUtils.lerp(
          nodes.Wolf3D_Teeth.morphTargetInfluences[index],
          value,
          speed
        );
      }
    }
  };

  // Adjust model scale, position, and rotation
  return (
    <group ref={group} rotation={[0.1, 0, 0]} scale={[2, 2, 2]} position={[0, -2, 0]}>
      <primitive object={nodes.Scene} />
    </group>
  );
}

export default function Avatar({ audioUrl, visemes, emotion }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.id = "avatar-canvas"; // Assign an ID for potential targeting
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }} ref={canvasRef}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 47, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 5]} intensity={1.5} />
        <Model audioUrl={audioUrl} visemes={visemes} emotion={emotion} />
        <Environment preset="sunset" />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
          target={[0, 0, 0]} // Center of orbit
        />
      </Canvas>
    </div>
  );
}

// Preload the GLTF models
useGLTF.preload("/avatar.glb");
useGLTF.preload("/models/animations.glb");