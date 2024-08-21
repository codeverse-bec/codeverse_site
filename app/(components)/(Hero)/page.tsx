"use client";
import dynamic from "next/dynamic";
import React from "react";

const SparklesCore = dynamic(() => import("../(ui)/sparkles").then(mod => mod.SparklesCore), {
  ssr: false,
});

export default function SparklesPreview() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20" style={{ userSelect: 'none' }}>
        CODEVERSE
      </h1>
    </div>
  );
}
