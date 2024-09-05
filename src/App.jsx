
import React from 'react'
import{Canvas} from "@react-three/fiber";
import "./style.css";
import {Environment, OrbitControls,ScrollControls} from "@react-three/drei"
import MacContainer from './MacContainer';


const App = () => {
  return( 
   
   
    <div id='parent'>
      <div id='nav'> 
       <p></p>
      </div>
      <div id='text' className="absolute text-white top-32">
        <h3 id='mac'>macbook pro.</h3>
        
        <h5 id='head'>oh so pro!</h5>
        <p id='para'>Lorem ipsum dolor sit amet consectetur, </p>
        <p id='para'>adipisicing elit. Nulla, ex nostrum? Iste, nihil.</p>
      </div>
     <Canvas camera={{fov:10, position:[0,0,200] }}>
    <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
    <ScrollControls pages={3}>
    <MacContainer/>
      </ScrollControls>
  </Canvas>
  </div>
  )
};

export default App
