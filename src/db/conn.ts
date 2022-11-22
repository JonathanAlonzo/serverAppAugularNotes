import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('app_note', 'root', '&&Jonathan&&',{
	host: 'localhost',
	dialect: 'mysql'
});

export default sequelize;