import { DataTypes } from 'sequelize';
import db from '../db/conn';

//Here is where said the Database table parameters ( Defining the model )
const Note = db.define('Note',{
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    userUid_fk: {
        type: DataTypes.STRING
    }
}, {});
export default Note;