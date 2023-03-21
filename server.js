const express = require('express');
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require('./data/schema')
const resolvers = require('./data/resolver')
const dbConnection = require('./data/dbconnections');

app.get('/', (req , res) =>{
    res.send('hello...........');
});

const root = resolvers

app.use('/graphql', graphqlHTTP({
    schema : schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(4000, () =>{
    console.log('server started on 4000');
})