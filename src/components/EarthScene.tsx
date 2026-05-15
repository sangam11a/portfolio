import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ── Earth with real NASA textures ── */
function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const earthTexture = useLoader(
    THREE.TextureLoader,
    'https://unpkg.com/three-globe@2.41.12/example/img/earth-blue-marble.jpg'
  );

  const bumpTexture = useLoader(
    THREE.TextureLoader,
    'https://unpkg.com/three-globe@2.41.12/example/img/earth-topology.png'
  );

  // Procedural cloud texture
  const cloudTexture = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 2048;
    c.height = 1024;
    const ctx = c.getContext('2d')!;
    ctx.clearRect(0, 0, 2048, 1024);
    for (let i = 0; i < 400; i++) {
      const x = Math.random() * 2048;
      const y = 80 + Math.random() * 864;
      const r = 15 + Math.random() * 80;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, `rgba(255,255,255,${0.03 + Math.random() * 0.12})`);
      grad.addColorStop(0.6, `rgba(255,255,255,${Math.random() * 0.04})`);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }, []);

  // Atmosphere shader
  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          vec3 atmosphereColor = mix(
            vec3(0.1, 0.4, 1.0),
            vec3(0.0, 0.8, 1.0),
            intensity
          );
          gl_FragColor = vec4(atmosphereColor, intensity * 0.7);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  const tilt = 23.44 * (Math.PI / 180);

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.08;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.1;
    if (glowRef.current) glowRef.current.rotation.y += delta * 0.03;
  });

  return (
    <group rotation={[tilt, 0, 0]}>
      {/* Main Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 128, 128]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.04}
          shininess={15}
          specular={new THREE.Color('#1a2a4a')}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.015, 64, 64]} />
        <meshPhongMaterial
          map={cloudTexture}
          transparent
          opacity={0.35}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.05, 64, 64]} />
        <meshBasicMaterial
          color="#4488cc"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh scale={[1.15, 1.15, 1.15]}>
        <sphereGeometry args={[2, 64, 64]} />
        <primitive object={atmosphereMaterial} attach="material" />
      </mesh>

      {/* Axis */}
      <AxisLine />
    </group>
  );
}

function AxisLine() {
  const obj = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0,-3.5,0, 0,3.5,0]), 3));
    const m = new THREE.LineBasicMaterial({ color: '#06b6d4', transparent: true, opacity: 0.12 });
    return new THREE.Line(g, m);
  }, []);
  return <primitive object={obj} />;
}

/* ── Satellite ── */
function Satellite() {
  const groupRef = useRef<THREE.Group>(null);
  const satRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Points>(null);
  const trailPositions = useMemo(() => new Float32Array(400 * 3), []);
  const trailIdx = useRef(0);

  const orbit = useMemo(() => ({
    radius: 3.8,
    inclination: Math.PI * 0.3,
    speed: 0.35,
    phase: 1.2,
  }), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * orbit.speed + orbit.phase;
    const x = orbit.radius * Math.cos(t);
    const y = orbit.radius * Math.sin(t) * Math.sin(orbit.inclination);
    const z = orbit.radius * Math.sin(t) * Math.cos(orbit.inclination);
    groupRef.current.position.set(x, y, z);

    if (satRef.current) {
      satRef.current.rotation.y += 0.015;
      satRef.current.rotation.z += 0.008;
    }

    if (trailRef.current) {
      const idx = (trailIdx.current % 400) * 3;
      trailPositions[idx] = x;
      trailPositions[idx + 1] = y;
      trailPositions[idx + 2] = z;
      trailIdx.current++;
      trailRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <group ref={satRef} scale={0.06}>
          <mesh><boxGeometry args={[1, 0.8, 1.2]} /><meshStandardMaterial color="#b8c0d0" metalness={0.9} roughness={0.15} /></mesh>
          <mesh position={[-2.2, 0, 0]}><boxGeometry args={[2.8, 0.04, 0.9]} /><meshStandardMaterial color="#1e3a6e" metalness={0.6} roughness={0.2} /></mesh>
          <mesh position={[2.2, 0, 0]}><boxGeometry args={[2.8, 0.04, 0.9]} /><meshStandardMaterial color="#1e3a6e" metalness={0.6} roughness={0.2} /></mesh>
          <mesh position={[0, 0.6, 0]}><cylinderGeometry args={[0.04, 0.04, 0.5]} /><meshStandardMaterial color="#999" metalness={0.9} roughness={0.1} /></mesh>
          <mesh position={[0, 0.95, 0]}><sphereGeometry args={[0.1]} /><meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={3} /></mesh>
          <pointLight color="#ef4444" intensity={0.4} distance={1.5} />
        </group>
      </group>

      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[trailPositions, 3]} count={400} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#06b6d4" size={0.008} transparent opacity={0.5} />
      </points>
    </>
  );
}

/* ── Second Satellite (different orbit) ── */
function Satellite2() {
  const groupRef = useRef<THREE.Group>(null);
  const satRef = useRef<THREE.Group>(null);

  const orbit = useMemo(() => ({
    radius: 4.5,
    inclination: Math.PI * 0.55,
    speed: 0.22,
    phase: 3.8,
  }), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * orbit.speed + orbit.phase;
    groupRef.current.position.set(
      orbit.radius * Math.cos(t),
      orbit.radius * Math.sin(t) * Math.sin(orbit.inclination),
      orbit.radius * Math.sin(t) * Math.cos(orbit.inclination)
    );
    if (satRef.current) satRef.current.rotation.y += 0.02;
  });

  return (
    <group ref={groupRef}>
      <group ref={satRef} scale={0.04}>
        <mesh><boxGeometry args={[0.8, 0.8, 0.8]} /><meshStandardMaterial color="#a0a8b8" metalness={0.85} roughness={0.2} /></mesh>
        <mesh position={[-1.5, 0, 0]}><boxGeometry args={[2, 0.03, 0.6]} /><meshStandardMaterial color="#1a2d5c" metalness={0.5} roughness={0.3} /></mesh>
        <mesh position={[1.5, 0, 0]}><boxGeometry args={[2, 0.03, 0.6]} /><meshStandardMaterial color="#1a2d5c" metalness={0.5} roughness={0.3} /></mesh>
        <mesh position={[0, 0.6, 0]}><sphereGeometry args={[0.08]} /><meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={3} /></mesh>
        <pointLight color="#10b981" intensity={0.3} distance={1} />
      </group>
    </group>
  );
}

/* ── Orbit Rings ── */
function OrbitRing({ radius, inclination, opacity, color }: { radius: number; inclination: number; opacity: number; color: string }) {
  const obj = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 256; i++) {
      const t = (i / 256) * Math.PI * 2;
      pts.push(new THREE.Vector3(
        radius * Math.cos(t),
        radius * Math.sin(t) * Math.sin(inclination),
        radius * Math.sin(t) * Math.cos(inclination)
      ));
    }
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    const m = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    return new THREE.Line(g, m);
  }, [radius, inclination, opacity, color]);
  return <primitive object={obj} />;
}

/* ── Floating Dust ── */
function CosmicDust() {
  const ref = useRef<THREE.Points>(null);
  const count = 800;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30;
      p[i * 3 + 1] = (Math.random() - 0.5) * 30;
      p[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return p;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.008;
      ref.current.rotation.x = state.clock.elapsedTime * 0.004;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#94a3b8" size={0.02} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

/* ── Loading Fallback ── */
function SceneLoader() {
  return (
    <mesh>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="#0a1128" wireframe />
    </mesh>
  );
}

/* ── Scene Content ── */
function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.08} color="#c8d6e5" />
      <directionalLight position={[8, 4, 6]} intensity={2.2} color="#fff8f0" castShadow />
      <directionalLight position={[-5, -2, -4]} intensity={0.15} color="#3b82f6" />
      <pointLight position={[0, 0, 6]} intensity={0.3} color="#06b6d4" />

      <Earth />
      <Satellite />
      <Satellite2 />
      <OrbitRing radius={3.8} inclination={Math.PI * 0.3} opacity={0.08} color="#06b6d4" />
      <OrbitRing radius={4.5} inclination={Math.PI * 0.55} opacity={0.05} color="#10b981" />
      <CosmicDust />
      <Stars radius={120} depth={60} count={4000} factor={3} saturation={0.1} fade speed={0.8} />
    </>
  );
}

/* ── Main Export ── */
export default function EarthScene() {
  const onCreated = useCallback((state: { gl: THREE.WebGLRenderer }) => {
    state.gl.toneMapping = THREE.ACESFilmicToneMapping;
    state.gl.toneMappingExposure = 1.1;
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 1.5, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        onCreated={onCreated}
        fallback={<div className="w-full h-full bg-deep-900" />}
      >
        <SceneLoader />
        <SceneContent />
      </Canvas>
    </div>
  );
}
