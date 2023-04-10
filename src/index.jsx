import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber'
import './style.css';
import reportWebVitals from './reportWebVitals';
import Experience from './Experience';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Configuración de cámara
const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [0, 0, -6]
}



root.render(
  <Canvas camera={cameraSettings} shadows={true}>
  <Experience />
</Canvas>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
