import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Instance } from "@react-three/drei";
import { SCENE } from "../state/Config";

const Shape = () => {
  const shapeRef = useRef(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (shapeRef.current) {
      shapeRef.current.position.x = 4 * Math.sin(time / 2);
      shapeRef.current.rotation.y += delta;
    }
  });

  return (
    <group>
      <Instance ref={shapeRef} />
    </group>
  );
};

export default Shape;
