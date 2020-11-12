import { IAssignment } from '@entities/Assignment';
import { ILocation } from '@entities/Location';
import { IPresentation } from '@entities/Presentation';



export interface IAssignmentDao {
    getOne(id: number, type: 'location' | 'presentation'): Promise<IAssignment | null>;
    getAll(): Promise<IAssignment[]>;
    add(location: ILocation, presentation: IPresentation): Promise<void>;
    update(user: IAssignment): Promise<void>;
    delete(id: number): Promise<void>;
}

class AssignmentDao implements IAssignmentDao {


    
    public async getOne(locationId: number, type: 'location'): Promise<IAssignment | null>;
    public async getOne(presentationId: number, type: 'presentation'): Promise<IAssignment | null>;
    public async getOne(id: number, type: 'location' | 'presentation'): Promise<IAssignment | null>
    {
        // TODO
        return Promise.resolve(null);
    }


    /**
     *
     */
    public getAll(): Promise<IAssignment[]> {
         // TODO
        return Promise.resolve([]);
    }


    /**
     *
     * @param location
     * @param presentation
     */
    public async add(presentation: IPresentation, location: ILocation): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }


    /**
     *
     * @param assignment
     */
    public async update(assignment: IAssignment): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }


    /**
     *
     * @param id
     */
    public async delete(assignmentId: number): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }
}

export default AssignmentDao;
