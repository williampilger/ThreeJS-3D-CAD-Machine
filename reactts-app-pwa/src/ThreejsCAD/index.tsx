import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThreejsCAD_ProjectType } from './config/types';
import './style.scss';

const ThreejsCAD = ( {project}:{project:ThreejsCAD_ProjectType}) => {

    const ref = useRef<HTMLDivElement>(null);
    // const [renderOK, setRenderOK] = useState<boolean>(false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();

    useEffect( ()=>{
        if(ref && ref.current){

            renderer.setSize( ref.current.clientWidth, ref.current.clientHeight );
            ref.current.appendChild(renderer.domElement)


            //TESTE DAQUI PRA BAIXO ############################################################################
            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            camera.position.z = 5;


            const animate = () => {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            }

            animate();
            
            //FIM DO TESTE ############################################################################

        }

        return( () => {
            if(ref.current){
                ref.current.removeChild(renderer.domElement)
            }
        });

    },[]);

    return (
        <div className="ThreejsCAD" style={ {
            width: project.runtime.view.width,
            height: project.runtime.view.height,
            backgroundColor: project.runtime.view.backgroundColor,
            borderRadius: project.runtime.view.borderRadious
        } } ref={ref}>
        </div>
    );
}

export default ThreejsCAD;
