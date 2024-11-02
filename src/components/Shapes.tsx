import { Instances } from "@react-three/drei";
import Shape from "./Shape";

const Shapes = () => {
  return (
    <group>
      <Instances>
        <cylinderGeometry />
        <meshStandardMaterial wireframe={true} color={"hotpink"} />
        <Shape />
      </Instances>
    </group>
  );
};

export default Shapes;
