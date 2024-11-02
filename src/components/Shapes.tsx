import { Instances } from "@react-three/drei";
import Shape from "./Shape";
import { SCENE } from "../state/Config";
import { shapeData } from "../data/ShapeData";

const Shapes = () => {
  return (
    <group>
      <Instances limit={SCENE.numShapes}>
        <cylinderGeometry
          args={[SCENE.RADIUS, SCENE.RADIUS, SCENE.HEIGHT, SCENE.SEGMENTS]}
        />
        <meshStandardMaterial wireframe={true} color={"#ffffff"} />
        {shapeData.map((shape, index) => (
          <Shape key={index} />
        ))}
      </Instances>
    </group>
  );
};

export default Shapes;
