import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import AssignmentDao from '@daos/Assignments/AssignmentDao.mock';
import { paramMissingError, IRequest } from '@shared/constants';

const router = Router();
const assignmentDao = new AssignmentDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/******************************************************************************
 *                      Get All Assignments - "GET /api/assignments/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    const assignments = await assignmentDao.getAll();
    return res.status(OK).json({assignments});
});



/******************************************************************************
 *                       Add One - "POST /api/assignments/add"
 ******************************************************************************/

router.post('/add', async (req: IRequest, res: Response) => {
    const { location, presentation } = req.body;
    if (!location || !presentation) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await assignmentDao.add(location, presentation);
    return res.status(CREATED).end();
});



/******************************************************************************
 *                       Update - "PUT /api/assignments/update"
 ******************************************************************************/

router.put('/update', async (req: IRequest, res: Response) => {
    const { id } = req.body;
    if (id === undefined) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await assignmentDao.update(req.body);
    return res.status(OK).end();
});



/******************************************************************************
 *                    Delete - "DELETE /api/assignments/delete/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: IRequest, res: Response) => {
    const { id } = req.params;
    await assignmentDao.delete(Number(id));
    return res.status(OK).end();
});



/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
