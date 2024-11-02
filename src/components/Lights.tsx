import { SCENE } from "../state/Config";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight
        position={SCENE.lightPosition}
        intensity={SCENE.pointIntensity}
      />
    </>
  );
};

export default Lights;
