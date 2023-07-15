import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('post', 'postgres', '    ', {
  host: 'localhost',
  dialect: 'postgres',
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
