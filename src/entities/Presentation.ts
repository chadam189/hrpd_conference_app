export interface IPresentation {
    id: number;
}

class Presentation implements IPresentation {
    public id: number;

    constructor(id: number) {
        this.id = id;
    }
}

export default Presentation;