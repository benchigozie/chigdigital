"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Stack from "./Stack"

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 5, 6], fov: 45 }}
      className="w-full h-full flex justify-center items-center"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <Stack />
      </Suspense>
    </Canvas>
  )
}

export default HeroScene