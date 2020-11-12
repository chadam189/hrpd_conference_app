import { ILocation } from "./Location";
import { IPresentation } from "./Presentation";

export interface IAssignment {
    id: number;
    location: ILocation;
    presentation: IPresentation;
}

class Assignment implements IAssignment {

    public id: number;
    public location: ILocation;
    public presentation: IPresentation;

    constructor(location: ILocation, presentation: IPresentation, id?: number) {
        this.location = location;
        this.presentation = presentation;
        this.id = id || -1;
    }
}

export default Assignment;
