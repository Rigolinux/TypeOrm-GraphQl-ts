

//import types
import { GraphQLID,GraphQLString } from 'graphql';
import { MessageType } from '../typeDev/Message';

//conection to database
import { User } from './../../Entities/User';

//bcrypt
import bcrypt from 'bcryptjs';

export const UPDATE_USER = {
    type: MessageType,
    args:{
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        oldpassword: {type: GraphQLString},
        Newpassword: {type: GraphQLString},


    },
    async resolve(_:any, args:any){
        const user = await User.findOne({where:{ id:args.id}})
        if(!user){
            const message = {
                success: false,
                message: "User not found"
            };
            return message;
        }else{
            const isMatch = await bcrypt.compare(args.oldpassword,user.password)
            
            if(!isMatch){
                const message = {
                    success: false,
                    message: "Password incorrect"
                };
                return message;
            }else{
                const  hashpasword = await bcrypt.hash(args.Newpassword,10)
                await User.update({id:args.id},{name:args.name,username:args.username,email:args.email,password:hashpasword});
                const message = {
                    success: true,
                    message: "User updated"
                };
                return message;
            }
            
        }
        
    }
}