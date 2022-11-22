import { Request, Response} from 'express';
import User from '../models/user.model';

/* CRUD Functions */

//CREATE WITH BODY
export const createUser = async (req: Request, res: Response) =>{
    const { body } = req;    
    try {
        await User.create(body);
        res.json({
            smg: "The user was created successfully"
        })
    } catch (error) {
        res.json({
            msg: "Something goes wrong, read the error above"
        })
        console.log(error);
    }
}

//DELETE BY ID
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        res.status(404).json({
            smg: `There isnt user with ${id} id value`
        });
    } else {
        await user.destroy();
        res.json({
            msg: `User deleted successfuly`
        });
    }
}

//GET USER BY UID
export const getUser = async (req: Request, res: Response) =>{
    const { uid } = req.params;
    const user = await User.findOne({where: {uid: uid }});
    if (user) {
        res.json(user);
    } else {
        res.json({
            msg: `There isnt User with ${uid} uid`,
        })
    }
}

//GET BY IUD
export const getUserByUid = async (req: Request, res: Response) => {
    const userUid = req.params.uid;
    const user = await User.findOne({where: {uid: userUid}});
    if (user) {
        res.json(user)
    } else {
        res.json(user)
    }
}

//UPDATE WITH BODY AND ID (PUT ACTION)