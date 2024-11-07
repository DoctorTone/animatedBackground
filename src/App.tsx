import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Shapes from "./components/Shapes";
import Text from "./UI/Text";
import Lights from "./components/Lights";

const INTERACTIVE = false;

function App() {
  return (
    <>
      <Canvas>
        <Lights />
        <Shapes />
        <OrbitControls
          enablePan={INTERACTIVE}
          enableRotate={INTERACTIVE}
          enableZoom={INTERACTIVE}
        />
      </Canvas>
      <Text />
    </>
  );
}

export default App;
