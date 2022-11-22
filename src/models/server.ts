import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routeNote from '../routes/notes.router';
import routeUser from '../routes/user.roter';
import db from '../db/conn';

class Conn {
	private app: Application;
	private port: string;

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '3001';
		this.listen();
		this.midlewares(); //always before routes method
		this.rotes();
		this.dbConn();
	}

	listen(){
		this.app.listen(this.port, () => {
			console.log(`App running in port ${this.port}`);
		})
	}

	rotes(){
		this.app.get('/', (req: Request, res: Response) => {
			res.json({
				msg : 'Hi from conn.ts'
			})
		})
		this.app.use('/api/notes', routeNote);
		this.app.use('/api/users', routeUser);
	}

	midlewares(){
		//here is we parser the body when we sent a post
		this.app.use(express.json());

		//Cors
		this.app.use(cors());
	}
	//method connection to BD MySQL Workbench
	async dbConn(){
		try {
			await db.authenticate();
			console.log('the connection to bd app_note was successfully');			
		} catch (error) {
			console.log(error);
			console.log('connection fail');
			
		}
	}
}
//This export will work with others files
export default Conn;