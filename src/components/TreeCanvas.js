import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const Star = ({ position, size }) => {
  const starRef = useRef();

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.02;
    }
  });


  const starShape = new THREE.Shape();
  const outerRadius = size;
  const innerRadius = size * 0.5;
  const totalPoints = 5;

  for (let i = 0; i < totalPoints * 2; i++) {
    const angle = (Math.PI * i) / totalPoints;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) {
      starShape.moveTo(x, y);
    } else {
      starShape.lineTo(x, y);
    }
  }
  starShape.closePath();

  return (
    <mesh ref={starRef} position={position}>
      <extrudeGeometry
        args={[
          starShape,
          {
            depth: 0.3,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.1,
            bevelSegments: 2,
          },
        ]}
      />
      <meshPhysicalMaterial
        color="gold"
        emissive="yellow"
        emissiveIntensity={2}
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  );
};

const Ornament = ({ position, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 64, 64]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.2}
        metalness={1}
        clearcoat={1}
        clearcoatRoughness={0}
        emissive={color}
        emissiveIntensity={1}
      />
    </mesh>
  );
};

const Garland = ({ height, radius, color }) => {
  const segments = 50;
  const garlandPositions = [];

  for (let i = 0; i < segments; i++) {
    const angle = (Math.PI * 2 * i) / segments;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    garlandPositions.push([x, height, z]);
  }

  return garlandPositions.map((pos, index) => (
    <mesh key={index} position={pos}>
      <sphereGeometry args={[0.12, 32, 32]} />
      <meshPhysicalMaterial color={color} emissive={color} roughness={0.1} metalness={0.8} />
    </mesh>
  ));
};

const Lights = () => {
  return (
    <Sparkles
      count={150}
      scale={[14, 16, 14]}
      size={1.5}
      speed={2}
      opacity={0.95}
      color="white"
    />
  );
};

const Tree = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const branches = [];
  const ornaments = [];
  const garlands = [];
  const colors = ["#FF0000", "#0000FF", "#FFFF00", "#00FF00", "#C0C0C0"];
  const garlandColor = "#FFD700";

  for (let i = 0; i < 8; i++) {
    const height = i * 1.4 + 2.2;
    const radius = 3.2 - i * 0.4;

    branches.push(
      <mesh key={`branch-${i}`} position={[0, height, 0]}>
        <coneGeometry args={[radius, 1.6, 64]} />
        <meshPhysicalMaterial color="#006400" roughness={0.4} />
      </mesh>
    );

    for (let j = 0; j < 20; j++) {
      const angle = (Math.PI * 2 * j) / 20;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = height - 0.6;

      ornaments.push(
        <Ornament
          key={`ornament-${i}-${j}`}
          position={[x, y, z]}
          color={colors[(i + j) % colors.length]}
        />
      );
    }

    garlands.push(<Garland key={`garland-${i}`} height={height - 0.5} radius={radius - 0.3} color={garlandColor} />);
  }

  return (
    <group ref={groupRef}>
      {branches}
      {ornaments}
      {garlands}
      <Star position={[0, 13, 0]} size={1.2} />
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 64]} />
        <meshPhysicalMaterial color="#8B4513" roughness={0.8} />
      </mesh>
    </group>
  );
};

const TreeCanvas = () => {
  return (
    <Canvas
      camera={{ position: [15, 15, 15], fov: 50 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[20, 20, 20]} castShadow />
      <Tree />
      <Lights />
      <OrbitControls />
    </Canvas>
  );
};

export default TreeCanvas;
