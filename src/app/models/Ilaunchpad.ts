export interface ILaunchpad {
    id: string;
    full_name: string;
    status: string;
    location: ILocation;
    details:string;
    vehicles_launched: string[];
}

export interface ILocation{

    name: string;
    region: string;
    latitude:string;
    longitude:string;
  
    
    // details: string;
}
