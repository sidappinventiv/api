
    // import express, { Response } from 'express';
    // import jwt from 'jsonwebtoken';
    // import { Sequelize, Model, DataTypes } from 'sequelize';
    // import { Request } from 'express';
    // const app = express();
    
    // const sequelize = new Sequelize('mydb', 'postgres', '    ', {
    //     host: 'localhost',
    //     dialect: 'postgres'
    //   });
    
    
    
    // (async function (){
    //     try {
    //         await sequelize.authenticate();
    //         console.log('Connection has been established successfully.');
    //       } catch (error) {
    //         console.error('Unable to connect to the database:', error);
    //       }
    // })()
    
    // class User extends Model {
    //   public id!: number;
    //   public name!:string;
    //   public age!:number;
    //   public username!: string;
    //   public password!: string;
    // }
    
    // User.init(
     
    //     {
    //     id: {
    //       type: DataTypes.INTEGER,
    //       autoIncrement: true,
    //       primaryKey: true,
    //     },
    //     name: {
    //         type: DataTypes.STRING,
    //         allowNull:false
    //       },
    //     age: {
    //       type: DataTypes.INTEGER,
    //       allowNull:false
    //     },
    //     username: {
    //       type: DataTypes.STRING,
    //       allowNull: false,
    //     },
    //     password: {
    //       type: DataTypes.STRING,
    //       allowNull: false,
    //     },
    //   },
    //   {
    //     sequelize,
    //     timestamps:false,
    //     tableName: 'users',
    //   }
    //   );
    // User.sync({ force: false});
    
    // class follower extends Model {
    //     public id!: number;
    //     public follow_id!: string;
    //     public follower_id!: string;
    // }
    // follower.init(
    //     {
    //         id: {
    //           type: DataTypes.INTEGER,
    //           autoIncrement: true,
    //           primaryKey: true,
    //         },
    //         follow_id: {
    //           type: DataTypes.INTEGER,
    //           allowNull : false,
    //           references:{
    //          model:User,
    //           key: 'id'
    //         },
    //         },
    //         follower_id: {
    //           type: DataTypes.INTEGER,
    //           allowNull : false,
    //           references:{
    //             model:User,
    //              key: 'id'
    //         }
    //         },
    //       },
    //       {
    //         sequelize,
    //         timestamps:false,
    //         tableName: 'followers',
    //       }
    //     );
      
    // follower.sync({force: true});
    
    
    // app.use(express.json());
    
    // app.post('/signup', async (req:Request, res:Response) => {
    
    //   const { name,age,username, password } = req.body;
    //   const user = await User.create({ name,age,username, password });
    //   const userId = user.id;
    //   const token = jwt.sign({ userId }, 'secret');
    //   res.status(201).json({message : "User created"})
    // });
    
    // const JWT_SECRET = 'your_secret_key'
    // app.post('/login', async (req: Request, res: Response) => {
    //     try {
    //       const { username, password } = req.body;
    //       const user = await User.findOne({ where: { username } });
    //       if (!user) {
    //         return res.status(404).json({ message: 'User not found' });
    //       }
      
    //       // Compare the provided password with the stored password
    //       if (password !== user.password) {
    //         return res.status(401).json({ message: 'Invalid credentials' });
    //       }
      
    //       const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    
    //       res.status(200).json({ message: 'Login successful', token });
    //     } catch (error) {
    //       console.error('Login error:', error);
    //       res.status(500).json({ message: 'Login failed' });
    //     }
    //   });
    
    // app.get('/users',async(req:Request, res:Response)=>{
    //     const active_user =await User.findAll()
    //     console.log(active_user);
    //     res.send(active_user);
    
    // });
    // app.listen(3000)
    