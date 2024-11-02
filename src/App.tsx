import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Shapes from "./components/Shapes";
import Text from "./UI/Text";
import Lights from "./components/Lights";

function App() {
  return (
    <>
      <Canvas>
        <Lights />
        <Shapes />
        <OrbitControls />
      </Canvas>
      <Text />
    </>
  );
}

export default App;
