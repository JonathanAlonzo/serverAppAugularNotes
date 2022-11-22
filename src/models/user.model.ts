import { DataTypes } from 'sequelize';
import db from '../db/conn';

const User = db.define('User', {
    user_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    photoUrl: {
        type: DataTypes.STRING
    },
    uid: {
        type: DataTypes.STRING
    }
},{
});
export default User;