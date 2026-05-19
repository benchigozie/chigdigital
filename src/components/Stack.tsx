"use client"

import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { MeshReflectorMaterial, RoundedBox } from "@react-three/drei"
import * as THREE from "three"

const Stack = () => {
  const group = useRef<THREE.Group>(null)

  const { viewport } = useThree()

  const isMobile = viewport.width < 6
  const isTablet = viewport.width >= 6 && viewport.width < 9

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.05
    group.current.rotation.x = Math.sin(t * 0.2) * 0.05
    group.current.rotation.z = Math.cos(t * 0.15) * 0.05
  })

  const planeHeight = isMobile ? 3 : 4
  const planeWidth = 0.15
  const planeDepth = isMobile ? 0.6 : 1
  const numPlanes = 9
  const radius = isMobile ? 1.3 : 1.9

  return (
    <group ref={group}>
      {Array.from({ length: numPlanes }).map((_, i) => {
        const angle = (i / numPlanes) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <mesh
            key={i}
            position={[x, 0, z]}
            rotation={[0, -angle, 0]}
          >
            <RoundedBox
              args={[planeWidth, planeHeight, planeDepth]}
              radius={0.04}
              smoothness={4}
            >
            <MeshReflectorMaterial
              color="#249fe0"
              blur={[400, 300]}      // x & y blur for frosted effect
              resolution={1024}
              roughness={0.8}        // frosted look
              metalness={0.1}        // soft highlights
              mixStrength={0.5}      // balance reflection vs color
              mirror={0.2}             // no clear mirror
            />
            </RoundedBox>
          </mesh>
        )
      })}
    </group>
  )
}

export default Stack