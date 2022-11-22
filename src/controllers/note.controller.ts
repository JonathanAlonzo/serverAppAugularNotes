import { Request, Response } from 'express';
import Note from '../models/note.model';


//CRUD Functions//

//Get all
export const getNotes = async ( req: Request, res: Response)=>{
	const lstNotes = await Note.findAll();
	res.json(lstNotes);
}

//GET by ID
export const getNote = async (req: Request, res: Response) =>{
	const id  = req.params.id;
	const note = await Note.findByPk(id);
	if (note) {
		res.json(note);
	}else{
		res.json({
			msg : `There isnt note with ${id} id`,
		})
	}
	
}
//Delete by ID
export const deleteNote = async (req: Request, res: Response) =>{
	const { id } = req.params;
	const note = await Note.findByPk(id);
	if (!note) {
		res.status(404).json({
			smg: `There isnt note with ${id} id`
		});
	}else{
		await note.destroy();
		res.json({
			msg: `Note deleted`
		});
	}
}
//Create with body (POST)
export const createNote = async (req: Request, res: Response) =>{
	const { body } = req;
	try {
		await Note.create(body);
		res.json({
			msg : `the note was created successfuly`
		});
	} catch (error) {
		console.log(error);
		res.json({
			msg: "Something goes wrong, call soport"
		})
	}
}

//Update with body and ID (PUT)
export const updateNote = async (req: Request, res: Response) =>{
	const { id } = req.params;
	const { body } = req;
	try {
		const note = await Note.findByPk(id);
		if (note) {
			await note.update(body);
			res.json({
				msg: `note updated successfuly`
			});
		}else{
			res.status(404).json({
				msg: `There isnt note with ${id} id`
			});
		}
	} catch (error) {
		console.log(error);
		res.json({
			msg: "Something goes wrong, call soport"
		});
	}
}
//************************************************************ */
//SELECT * FROM Users WHERE iud = iud_currentUser;
export const getUiduserBd = async (req: Request, res: Response) => {
	const userUid_fk = req.params.userUid_fk;
	const note = await Note.findAll({where: {userUid_fk: userUid_fk }});
	if (note) {
		res.json(note);
	}else{
		res.json({
			smg: `There isnt note with that title getUserUidBd`
		});
	}
}