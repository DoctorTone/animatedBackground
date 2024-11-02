import { Instances } from "@react-three/drei";
import Shape from "./Shape";
import { SCENE } from "../state/Config";

const Shapes = () => {
  return (
    <group>
      <Instances limit={SCENE.numShapes}>
        <cylinderGeometry />
        <meshStandardMaterial wireframe={true} color={"hotpink"} />
        <Shape />
      </Instances>
    </group>
  );
};

export default Shapes;
