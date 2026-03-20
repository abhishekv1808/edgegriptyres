"use client";

import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Float, Preload } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import * as THREE from "three";

// Extend Three.js elements to register them with React Three Fiber
extend(THREE);

function Model({ onError }: { onError: () => void }) {
  try {
    const { scene } = useGLTF("/model.glb");
    // @ts-ignore - primitive is a valid R3F element registered at runtime
    return <primitive object={scene} scale={2} rotation={[0, Math.PI / 4, 0]} />;
  } catch (e) {
    onError();
    return null;
  }
}

function FallbackImage() {
  return (
    <img
      src="/images/hero-tyre.png"
      alt="Premium Tyre"
      className="w-full h-full object-contain animate-[spin_5s_linear_infinite]"
    />
  );
}

export default function TyreModel() {
  const [hasError, setHasError] = useState(false);
  const [modelExists, setModelExists] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/model.glb", { method: "HEAD" })
      .then((res) => {
        setModelExists(res.ok);
        if (!res.ok) setHasError(true);
      })
      .catch(() => {
        setModelExists(false);
        setHasError(true);
      });
  }, []);

  if (modelExists === null || hasError) {
    return <FallbackImage />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          {/* @ts-ignore - R3F runtime elements */}
          <ambientLight intensity={1.5} />
          {/* @ts-ignore - R3F runtime elements */}
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <Environment preset="city" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Model onError={() => setHasError(true)} />
          </Float>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
