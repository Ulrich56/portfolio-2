"use client"

import React, { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.cjs"

const Stars = (props: any) => {
  const starRef = useRef<any>(null)

  // Génère 5000 points valides dans une sphère
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000*3), { radius: 1.2 })
  )

  useFrame((state, delta) => {
    if (starRef.current) {
      starRef.current.rotation.x -= delta / 10
      starRef.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={starRef} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const BackgroundStars = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default BackgroundStars
