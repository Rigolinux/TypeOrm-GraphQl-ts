
//create a schema for graphql
import {GraphQLSchema,GraphQLObjectType} from 'graphql';

//import queries
import { GRETING } from './Queries/Greting';
import { getUsers } from './Queries/User';
import { GETONEUSER } from './Queries/GetOneuser';

//import mutations
import { CreateUser } from './Mutation/Users';
import { DeleteUser } from './Mutation/DeleteUser';
import { UPDATE_USER } from './Mutation/UpdateUser';

//import root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        gretting: GRETING,
        getAllUsers: getUsers,
        getOneUser: GETONEUSER,
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        CreateUser: CreateUser,
        DeleteUser: DeleteUser,
        UpdateUser: UPDATE_USER,
    },
});

export const schema = new GraphQLSchema({

    //view datas
    query: RootQuery,
    //add, update, delete datas
    mutation: Mutation,
});