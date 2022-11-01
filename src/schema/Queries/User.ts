
//data types
import { GraphQLList } from 'graphql';
import { UserType } from '../typeDev/User';
//conection to database
import { conection } from '../../Databases/database';
import { User } from './../../Entities/User';

export const getUsers = {
    type: GraphQLList(UserType),
    resolve: async () => {
        const users = await conection.manager.find(User);
        
        return users;
    }

}