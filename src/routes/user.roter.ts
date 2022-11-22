import { Router } from 'express';
import { createUser, deleteUser, getUser, getUserByUid } from '../controllers/user.controller';

const router = Router();

//CRUDS Endpoints
router.get('/:uid', getUserByUid)
router.post('/', createUser);
//router.get('/:uid', getUser);
router.delete('/:id', deleteUser);

export default router;
