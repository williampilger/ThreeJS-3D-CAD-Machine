import './App.scss';
import ThreejsCAD from './ThreejsCAD';
import { ThreejsCAD_ProjectType } from './ThreejsCAD/config/types';

function App() {

    const project: ThreejsCAD_ProjectType = {
        layers: [
            {
                color: 'd4d4d4ff',
                width: 1,
                type: 'continuos',
                hidden: false
            },
            {
                color: 'red',
                width: 1,
                type: 'continuos',
                hidden: false
            },
            {
                color: 'white',
                width: 1,
                type: 'continuos',
                hidden: false
            }
        ],
        entities: [
            {
                type: 'line',
                coord: [
                    { x: 10, y: 10, z: 10 },
                    { x: 20, y: 20, z: 20 }
                ],
                layer: 2
            }
        ],
        runtime: {
            camera: {
                position: {
                    position: {x:0,y:0,z:0},
                    rotation: {x:0,y:0,z:0}
                }
            },
            view:{
                backgroundColor: '#000000ff',
                width: 300,
                height: 300,
                borderRadious: 5
            }
        }
    }


    return (
        <div className="App">
            <span>Exemplo de uso do ThreeJS CAD</span>
            <ThreejsCAD project={project}/>
        </div>
    );
}

export default App;
