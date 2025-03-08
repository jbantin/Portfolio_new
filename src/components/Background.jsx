import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
  useHelper,
} from "@react-three/drei";
import { useControls } from "leva";
import { SpotLightHelper } from "three";
const LightWithHelper = () => {
  const light = useRef();
  const { angle, penumbra } = useControls({
    penumbra: {
      value: 0.0,
      min: 0,
      max: 1,
      step: 0.1,
    },
    angle: Math.PI / 8,
  });
  useHelper(light, SpotLightHelper, "orange");
  return (
    <spotLight
      ref={light}
      angle={angle}
      penumbra={penumbra}
      intensity={80}
      color={0xffea00}
      position={[2, 5, 1]}
      castShadow
    />
  );
};

const AnimatedBox = () => {
  const boxRef = useRef();

  const { color, speed } = useControls({
    color: "#00bfff",

    speed: {
      value: 0.005,
      min: 0.0,
      max: 0.03,
      step: 0.001,
    },
  });

  useFrame(() => {
    boxRef.current.rotation.x += speed * 3;
    boxRef.current.rotation.y += speed * 2;
    boxRef.current.position.z += 0.1;
    if (boxRef.current.position.z >= 5) boxRef.current.position.z = -39;
  });
  return (
    <mesh ref={boxRef} position={[0, 2, 5]} castShadow>
      {/* <sphereGeometry args={[2, 80, 80]} /> */}
      <axesHelper args={[10]} />
      <boxGeometry args={[1, 1, 1]} />
      <meshToonMaterial color={color} />
    </mesh>
  );
};
const Background = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] fixed  bg-black z-[-2]">
        <Canvas shadows>
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport />
          </GizmoHelper>
          <gridHelper args={[20]} />

          <axesHelper args={[10]} />
          <OrbitControls />
          <AnimatedBox />
          <ambientLight />
          <LightWithHelper />
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};
export default Background;
