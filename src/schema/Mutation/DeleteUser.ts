

//import types
import { GraphQLID,GraphQLString } from 'graphql';
import { UserType } from '../typeDev/User';

//conection to database
import { User } from './../../Entities/User';

export const DeleteUser ={
    type: GraphQLID,
    args:{
        id: {type: GraphQLID}
    },
    async resolve(_:any, args:any){
        const user = await User.findOne({where:{ id:args.id}})
        if(!user){
            return "User not found";
        }else{
            await User.delete({id:args.id});
            return "User deleted";
        }
        
    }
}