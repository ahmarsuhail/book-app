const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://<username>:<password>@ds047335.mlab.com:47335/library');
mongoose.connection.once('open', () => {
    console.log("Connected");
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));    

app.listen(4000, () => {
    console.log("Now listenting");
});
