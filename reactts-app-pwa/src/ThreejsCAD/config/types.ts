export type ThreejsCAD_LayerType = {
    color: string,
    width: number,
    type: 'continuos' | 'dashed',
    hidden: boolean
}

export type ThreejsCAD_CoordinateType = {
    x: number,
    y: number,
    z: number
}

export type ThreejsCAD_RotationType = {
    x: number,
    y: number,
    z: number
}

export type ThreejsCAD_FullPositionType = {
    position: ThreejsCAD_CoordinateType,
    rotation: ThreejsCAD_RotationType
}

export type ThreejsCAD_EntityType = {
    type: 'box',
    coord: ThreejsCAD_CoordinateType[],
    layer: number //layer ID
}

export type ThreejsCAD_ProjectType = {
    layers: ThreejsCAD_LayerType[],
    entities: ThreejsCAD_EntityType[],
    runtime: {
        camera: {
            position: ThreejsCAD_FullPositionType
        }
        view:{
            backgroundColor?: string,
            width?: number | string,
            height?:number | string,
            borderRadious?: number
        }
    }
} 