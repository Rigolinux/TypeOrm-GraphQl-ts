
//import types
import { GraphQLID } from 'graphql';
import { UserType } from '../typeDev/User';

//conection to database
import { User } from './../../Entities/User';

export const GETONEUSER = {
    type:  UserType,
    args:{
        id: {type: GraphQLID}
    },
    async resolve(_:any, args:any){
        return await User.findOne({where:{ id:args.id}})
        
        
    }
}