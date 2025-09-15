import { Canvas } from '@react-three/fiber';
import { Suspense, FC } from 'react';
import * as THREE from 'three';
import SkateBoardScene from './SkateBoardScene';

export const INITIAL_CAMERA_POSITION = [1.5, 1, 1.4] as const;

export interface SkateBoardSceneProps {
  deckTextureURL: string;
  wheelTextureURL: string;
  truckColor: string;
  boltColor: string;
}

const InteractiveSkateboard: FC<SkateBoardSceneProps> = ({
  deckTextureURL,
  wheelTextureURL,
  truckColor,
  boltColor
}) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: INITIAL_CAMERA_POSITION, fov: 55 }}
      >
        <Suspense>
          <SkateBoardScene
            deckTextureURL={deckTextureURL}
            wheelTextureURL={wheelTextureURL}
            truckColor={truckColor}
            boltColor={boltColor}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default InteractiveSkateboard;
