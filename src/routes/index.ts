import { Router } from 'express';
import AssignmentRouter from './Assignments';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/assignments', AssignmentRouter);

// Export the base-router
export default router;
