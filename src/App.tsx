import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Shapes from "./components/Shapes";
import Text from "./UI/Text";

function App() {
  return (
    <>
      <Canvas>
        <Shapes />
        <OrbitControls />
      </Canvas>
      <Text />
    </>
  );
}

export default App;
