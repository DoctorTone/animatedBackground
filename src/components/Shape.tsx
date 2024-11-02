import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Instance } from "@react-three/drei";

const Shape = () => {
  const shapeRef = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (shapeRef.current) {
      shapeRef.current.position.x = 2 * Math.sin(time / 2);
    }
  });

  return (
    <group>
      <Instance ref={shapeRef} />
    </group>
  );
};

export default Shape;
