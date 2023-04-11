//import { HemisphereLight, HemisphereLightHelper } from 'three';
import { SpotLight, SpotLightHelper } from 'three';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import Floor from './Floor';
import Door from './Door';

export default function Experience() {
//   const hemisphereLightRef = useRef();

//   // crea la instancia del HemisphereLight
//   const hemisphereLight = new HemisphereLight(0xffffff, 0x000000, 10);
//   hemisphereLight.position.set(0, 2, -2);
//   hemisphereLightRef.current = hemisphereLight;

//   // crea la instancia del helper
//   const hemisphereLightHelper = new HemisphereLightHelper(hemisphereLight, 10);

//   // agrega el helper a la escena
//   hemisphereLight.add(hemisphereLightHelper);

    const SpotLightRef = useRef();

    //Crea la instancia de SpotLight
    const spotLight = new SpotLight(0xffffff, 0x000000, 5.5);
    spotLight.position.set(0, 2, -2);
    SpotLightRef.current = spotLight;

   // crea la instancia del helper
    const spotLightHelper = new SpotLightHelper(spotLight, 5.5);

    // agrega el helper a la escena
    spotLight.add(spotLightHelper);



  return (
    <>
      <OrbitControls makeDefault />
      <primitive object={spotLight} castShadow intensity={11}/>
      <ambientLight intensity={0.5} />
      <Floor />
      <Door />
    </>
  );
}





