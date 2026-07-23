import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Html, Stars } from '@react-three/drei'
import * as THREE from 'three'

const RADIUS = 2

// Convert geographic coordinates to a point on the sphere surface. The +180
// theta offset aligns with the equirectangular earth texture's seam.
function latLngToVector3(lat, lng, radius = RADIUS) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

// Soft radial brass glow drawn to a canvas, used as the pin halo sprite.
function makeGlowTexture() {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const c = size / 2
  const g = ctx.createRadialGradient(c, c, 0, c, c, c)
  g.addColorStop(0, 'rgba(226,196,134,0.95)')
  g.addColorStop(0.25, 'rgba(198,161,91,0.55)')
  g.addColorStop(1, 'rgba(198,161,91,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function Earth() {
  const texture = useLoader(THREE.TextureLoader, '/textures/earth.jpg')
  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 8
  }, [texture])

  return (
    <group>
      {/* Globe (stops events so pins on the far side aren't clickable through it) */}
      <mesh
        onClick={(e) => e.stopPropagation()}
        onPointerOver={(e) => e.stopPropagation()}
      >
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive="#ffffff"
          emissiveMap={texture}
          emissiveIntensity={0.31}
          color="#a4afbf"
          roughness={0.95}
          metalness={0}
        />
      </mesh>
    </group>
  )
}

function Marker({ port, glowTexture, active, onSelect, onHoverChange }) {
  const [hovered, setHovered] = useState(false)
  const groupRef = useRef()
  const ringRef = useRef()
  const coreRef = useRef()
  const isOn = hovered || active

  const position = useMemo(
    () => latLngToVector3(port.lat, port.lng, RADIUS * 1.02),
    [port.lat, port.lng],
  )
  const dir = useMemo(() => position.clone().normalize(), [position])
  const camDir = useMemo(() => new THREE.Vector3(), [])

  useFrame((state) => {
    // Cull markers on the far side of the globe so their depth-test-free glow
    // doesn't bleed through. The horizon for this camera sits near facing ~0.4.
    const facing = dir.dot(camDir.copy(state.camera.position).normalize())
    const visible = facing > 0.41
    if (groupRef.current) groupRef.current.visible = visible
    if (!visible) return

    const fade = THREE.MathUtils.smoothstep(facing, 0.41, 0.52)
    const t = state.clock.elapsedTime
    const pulse = 1 + Math.sin(t * 2 + position.x * 3) * 0.14
    if (ringRef.current) {
      ringRef.current.scale.setScalar((isOn ? 0.46 : 0.32) * pulse)
      ringRef.current.material.opacity = (isOn ? 1 : 0.7) * fade
    }
    if (coreRef.current) coreRef.current.material.opacity = fade
  })

  const setHover = (v) => {
    setHovered(v)
    onHoverChange?.(v)
    document.body.style.cursor = v ? 'pointer' : 'auto'
  }

  return (
    <group ref={groupRef} position={position}>
      {/* Brass halo (depthTest off so the curved surface never slices the quad) */}
      <sprite ref={ringRef} renderOrder={3}>
        <spriteMaterial
          map={glowTexture}
          transparent
          depthTest={false}
          depthWrite={false}
          opacity={isOn ? 1 : 0.7}
          blending={THREE.AdditiveBlending}
        />
      </sprite>

      {/* Bright beacon core (always lit so it reads as a glowing point) */}
      <mesh ref={coreRef} scale={isOn ? 1.7 : 1} renderOrder={4}>
        <sphereGeometry args={[0.028, 18, 18]} />
        <meshBasicMaterial
          color={isOn ? '#ffffff' : '#f3dca9'}
          transparent
          depthTest={false}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Invisible larger hit target for easy clicking */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover(true)
        }}
        onPointerOut={() => setHover(false)}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(port)
        }}
      >
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* Hover name label */}
      {hovered && !active && (
        <Html distanceFactor={16} style={{ pointerEvents: 'none', transform: 'translateY(-50%) scale(0.45)', transformOrigin: 'left center' }} zIndexRange={[20, 0]}>
          <div className="ml-3 whitespace-nowrap rounded-full border border-white/15 bg-ink/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-foam/90 backdrop-blur-sm">
            {port.name}
          </div>
        </Html>
      )}
    </group>
  )
}

function Scene({ ports, selectedId, onSelect }) {
  const glowTexture = useMemo(() => makeGlowTexture(), [])
  const [hoverCount, setHoverCount] = useState(0)
  const paused = hoverCount > 0 || Boolean(selectedId)

  return (
    <>
      <ambientLight intensity={0.95} />
      <directionalLight position={[5, 3, 5]} intensity={0.85} />
      <Stars radius={60} depth={20} count={900} factor={2.2} saturation={0} fade speed={0.4} />

      <Suspense fallback={null}>
        <Earth />
      </Suspense>

      {ports.map((port) => (
        <Marker
          key={port.id}
          port={port}
          glowTexture={glowTexture}
          active={selectedId === port.id}
          onSelect={onSelect}
          onHoverChange={(v) => setHoverCount((c) => Math.max(0, c + (v ? 1 : -1)))}
        />
      ))}

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.5}
        autoRotate={!paused}
        autoRotateSpeed={0.45}
        minPolarAngle={Math.PI * 0.18}
        maxPolarAngle={Math.PI * 0.82}
      />
    </>
  )
}

export default function Globe({ ports, selectedId, onSelect }) {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
      style={{ touchAction: 'pan-y' }}
    >
      <Scene ports={ports} selectedId={selectedId} onSelect={onSelect} />
    </Canvas>
  )
}
