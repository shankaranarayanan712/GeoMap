
export interface Nodes {
    type: string;
    features: Feature[];
    coordinates: number[][]
}    

export interface Feature {
        type: string;
        id: string;
        properties: Location;
        geometry: Geometry;
}

export interface Geometry {
    type: string;
    coordinates: number[][];
}
export interface Location {
    timestamp: Date;
    version: number;
    changeset: number;
    user: string;
    uid: number;
    highway: string;
    surface: string;
    id: string;
}

   


