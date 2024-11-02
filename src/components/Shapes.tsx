import { Instances } from "@react-three/drei";
import Shape from "./Shape";
import { SCENE } from "../state/Config";

const Shapes = () => {
  return (
    <group>
      <Instances limit={SCENE.numShapes}>
        <cylinderGeometry
          args={[SCENE.RADIUS, SCENE.RADIUS, SCENE.HEIGHT, SCENE.SEGMENTS]}
        />
        <meshStandardMaterial wireframe={true} color={"yellow"} />
        <Shape />
      </Instances>
    </group>
  );
};

export default Shapes;
