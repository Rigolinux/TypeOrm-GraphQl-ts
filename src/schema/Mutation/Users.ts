
//data types for graphql
import { GraphQLString, GraphQLNonNull } from 'graphql';

//import entity from user
import { User } from '../../Entities/User';

//import database conection
import { conection } from '../../Databases/database';

//import type user
import { UserType } from '../typeDev/User';

//encryp password
import bcrypt from 'bcryptjs';

export const CreateUser = {
    type: UserType,
    args: {
        name : {type: new GraphQLNonNull(GraphQLString)},
        username : {type: new GraphQLNonNull(GraphQLString)},
        email : {type: new GraphQLNonNull(GraphQLString)},
        password : {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve: async(parent:any, args:any)=>{

        //destructuring the params
        const {name, username, email, password} = args;

        //encrypt password
        const paswordhashed = await bcrypt.hash(password, 10)

        //create a new user
        const user = new User();
        user.name = name;
        user.username = username;
        user.email = email;
        user.password = paswordhashed;

        //save the user in the database
        const data = await conection.manager.save(user);

        

        return {
            id: data.id,
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
        }
        
        
    },
};