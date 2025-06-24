import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import FloatingGeometry from './3d/FloatingGeometry';
import ParticleField from './3d/ParticleField';

const Scene3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      {/* Stars Background */}
      <Stars
        radius={300}
        depth={60}
        count={1000}
        factor={7}
        saturation={0}
        fade={true}
      />

      {/* Floating Geometric Elements */}
      <group ref={groupRef}>
        <Float speed={1} rotationIntensity={1} floatIntensity={2}>
          <FloatingGeometry position={[-3, 2, -2]} />
        </Float>
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <FloatingGeometry position={[3, -1, -3]} geometry="sphere" />
        </Float>
        
        <Float speed={0.8} rotationIntensity={2} floatIntensity={1.5}>
          <FloatingGeometry position={[0, 1, -4]} geometry="torus" />
        </Float>
      </group>

      {/* Particle Field */}
      <ParticleField />
    </>
  );
};

export default Scene3D;