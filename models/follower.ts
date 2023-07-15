// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../database';
// class followers extends Model {}


// followers.init({
  
//   follower_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   following_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
  
// }, {Sequelize, 
//   modelName: 'followers' 
// });

// (async ()=>{
//     await followers.sync({alter: true});
// })();

// console.log(followers === Sequelize.models.followers);
// export {followers}