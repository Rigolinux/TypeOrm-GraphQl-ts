
//data types of graphql
import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} from 'graphql';

export const GRETING = {
    type: GraphQLString,
    resolve: () => 'Hello World'
}