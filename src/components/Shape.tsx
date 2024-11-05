import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Instance } from "@react-three/drei";
import { SCENE } from "../state/Config";

const Shape = () => {
  const shapeRef = useRef(null);
  const rotInc = Math.random() * Math.PI;
  let direction = Math.random() - 0.5;

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (shapeRef.current) {
      shapeRef.current.position.x += delta * direction;
      if (
        shapeRef.current.position.x > SCENE.MAX_X ||
        shapeRef.current.position.x < -SCENE.MAX_X
      ) {
        direction *= -1;
      }
      shapeRef.current.rotation.y += delta * rotInc;
    }
  });

  return (
    <group scale={SCENE.SCALE}>
      <Instance
        ref={shapeRef}
        position={[Math.random() * 10 - 5, Math.random() * 10 - 5, 0]}
        rotation={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}
      />
    </group>
  );
};

export default Shape;
