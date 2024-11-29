import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance } from '@react-three/drei'
import * as THREE from 'three'

function HeartGeometry() {
  const heartShape = new THREE.Shape()
  const x = 0, y = 0
  
  heartShape.moveTo(x + 0.25, y + 0.25)
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y)
  heartShape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35)
  heartShape.bezierCurveTo(x - 0.3, y + 0.6, x - 0.15, y + 0.8, x + 0.25, y + 1)
  heartShape.bezierCurveTo(x + 0.6, y + 0.8, x + 0.8, y + 0.6, x + 0.8, y + 0.35)
  heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y)
  heartShape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25)

  const geometry = new THREE.ShapeGeometry(heartShape)
  geometry.scale(0.05, 0.05, 0.05)
  return geometry
}

function Hearts() {
  const ref = useRef<THREE.Group>(null)
  const heartGeometry = useMemo(() => HeartGeometry(), [])
  const particleCount = 150

  const hearts = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      
      const radius = 2 + (Math.random() * 4)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      temp.push({
        position: [x, y, z]
      })
    }
    return temp
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 180
      ref.current.rotation.y -= delta / 200
      ref.current.position.y = Math.sin(state.clock.elapsedTime / 6) * 0.04
    }
  })

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Instances range={particleCount} geometry={heartGeometry} material={new THREE.MeshBasicMaterial({ 
        color: "#a855f7", 
        transparent: true, 
        opacity: 0.4,
        side: THREE.DoubleSide 
      })}>
        {hearts.map((heart, i) => (
          <Heart 
            key={i} 
            position={heart.position}
          />
        ))}
      </Instances>
    </group>
  )
}

function Heart({ position }: { 
  position: [number, number, number]
}) {
  const ref = useRef<THREE.Object3D>()
  
  useFrame(state => {
    if (ref.current) {
      const direction = new THREE.Vector3()
      direction.subVectors(state.camera.position, new THREE.Vector3(...position)).normalize()
      
      const matrix = new THREE.Matrix4()
      matrix.lookAt(
        new THREE.Vector3(0, 0, 0),
        direction,
        new THREE.Vector3(0, 1, 0)
      )
      
      ref.current.quaternion.setFromRotationMatrix(matrix)
      ref.current.rotation.y += Math.PI 
    }
  })

  return (
    <Instance 
      ref={ref}
      position={position}
    />
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black" style={{ zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <Hearts />
      </Canvas>
    </div>
  )
}
