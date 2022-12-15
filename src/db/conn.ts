import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('app_note_db', 'joseenrique', 'univercidad@1',{
	host: 'utpserver1.mysql.database.azure.com',
	dialect: 'mysql'
});

export default sequelize;