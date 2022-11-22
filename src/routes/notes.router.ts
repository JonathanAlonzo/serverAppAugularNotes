import { Router } from 'express';
import { createNote, deleteNote, getNote, getNotes, getUiduserBd, updateNote } from '../controllers/note.controller';

const router = Router();
//CRUDS Endpoints
router.get('/:userUid_fk', getUiduserBd);//DELETE THIS
router.get('/:id', getNote);
router.get('/', getNotes);
router.delete('/:id', deleteNote);
router.post('/', createNote);
router.put('/:id', updateNote);

export default router;