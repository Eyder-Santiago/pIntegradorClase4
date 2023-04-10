import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf';
import Floor from './Floor'


export default function Experience(){
    const direccionalLightRef = useRef();

    useHelper(direccionalLightRef, DirectionalLightHelper, 1);

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight ref={direccionalLightRef} position={[0, 2, -2]} castShadow intensity={1.5}/>
        <ambientLight intensity={0.5} />

        Importamos el piso
        <Floor/>
    </>











}