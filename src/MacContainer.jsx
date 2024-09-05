/* eslint-disable react/no-unknown-property */
import { ScrollControls, useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import { Group } from 'three';
import * as THREE from "three";





const MacContainer = () => {
   let model= useGLTF("./mac3.glb");
  //let tex =useTexture("./red.jpg");
   let meshes ={};
   model.scene.traverse(e =>{
    if(e instanceof THREE.Mesh || e instanceof THREE.Group){
        meshes[e.name] =e;
    }
   });
   console.log(meshes);

 meshes.Screen_ComputerScreen_0.rotation.x = THREE.MathUtils.degToRad(270);
 let data=useScroll();

 useFrame((state,delta)=>{
  meshes.Screen_ComputerScreen_0.rotation.x=THREE.MathUtils.degToRad(270 - data.offset *-90);
 });
// meshes.Object_3.rotation.x = THREE.MathUtils.degToRad(90);
// meshes.Object_5.rotation.x = THREE.MathUtils.degToRad(90);
  return (
  <group position={[0,-10,0]} >
    <primitive object={ model.scene} />
  </group>

  );
  
};

export default MacContainer;
