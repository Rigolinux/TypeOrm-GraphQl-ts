import express from 'express';

// graphql server
import {graphqlHTTP} from "express-graphql";

// schema
import {schema} from "./schema";

const app = express();

app.use(express.json());


app.use('/graphql', graphqlHTTP(
{
    graphiql: true,
    schema: schema,
}
));

export default app;