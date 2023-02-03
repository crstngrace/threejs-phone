import { Canvas } from '@react-three/fiber';
import { StyledCanvas } from '../styles/Canvas.styled';
import Mesh from './Mesh';

const Scene = ({ state: [isLoaded, setIsLoaded] }) => (
  <StyledCanvas>
    <Canvas>
      <Mesh state={[isLoaded, setIsLoaded]} />
    </Canvas>
  </StyledCanvas>
);

export default Scene;
