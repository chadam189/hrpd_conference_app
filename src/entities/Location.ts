export interface ILocation {
    id: number;
}

class Location implements ILocation {
    public id: number;

    constructor(id: number) {
        this.id = id;
    }
}

export default Location;