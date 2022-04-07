import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/modelDraco.gltf");
  return <primitive object={gltf.scene} position={[0, -0.4, 0]} />;
}

function Banner() {
  return (
    <div className="flex justify-center">
      <div className="w-[485.5px] h-[250px] border-solid border-2 border-sky-500 rounded-lg">
        <Canvas camera={{ position: [0, 0.2, 0.8] }}>
          <ambientLight intensity={0.7} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={true}
            enableDamping
            dampingFactor={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </div>
  );
}
export default Banner;
