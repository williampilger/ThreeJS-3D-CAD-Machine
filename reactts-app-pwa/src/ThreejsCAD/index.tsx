import { ThreejsCAD_ProjectType } from './config/types';
import './style.scss';

const ThreejsCAD = ( {project}:{project:ThreejsCAD_ProjectType}) => {



    return (
        <div className="ThreejsCAD" style={ {
            width: project.runtime.view.width,
            height: project.runtime.view.height,
            backgroundColor: project.runtime.view.backgroundColor,
            borderRadius: project.runtime.view.borderRadious
        } }>
            
        </div>
    );
}

export default ThreejsCAD;
