import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Door() {

    const PATH = "/static/textures/door/"


    //variable que contiene las texturas
    const props = useTexture({
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })



    
    //usamos map para aplicar la textura
    //meshStandarMaterial rebota la luz
    return (
        <mesh castShadow rotation-y={Math.PI / 12}>
            <planeGeometry args={[2, 3]}/>
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}