import Assignment, { IAssignment } from '@entities/Assignment';
import { getRandomInt } from '@shared/functions';
import { IAssignmentDao } from './AssignmentDao';
import MockDaoMock from '../MockDb/MockDao.mock';
import { ILocation } from '@entities/Location';
import { IPresentation } from '@entities/Presentation';



class AssignmentDao extends MockDaoMock implements IAssignmentDao {


    public async getOne(locationId: number, type: 'location'): Promise<IAssignment | null>;
    public async getOne(presentationId: number, type: 'presentation'): Promise<IAssignment | null>;
    public async getOne(id: number, type: 'location' | 'presentation'): Promise<IAssignment | null>
    {
        const db = await super.openDb();
        for (const assignment of db.assignments) {
            if (assignment[type].id === id) {
                return assignment;
            }
        }
        return null;
    }


    public async getAll(): Promise<IAssignment[]> {
        const db = await super.openDb();
        return db.assignments;
    }


    public async add(location: ILocation, presentation: IPresentation): Promise<void> {
        const db = await super.openDb();
        const assignment = new Assignment(location, presentation);
        assignment.id = getRandomInt();
        db.assignments.push(assignment);
        await super.saveDb(db);
    }


    public async update(assignment: IAssignment): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.assignments.length; i++) {
            if (db.assignments[i].id === assignment.id) {
                db.assignments[i] = assignment;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Assignment not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.assignments.length; i++) {
            if (db.assignments[i].id === id) {
                db.assignments.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Assignment not found');
    }
}

export default AssignmentDao;
