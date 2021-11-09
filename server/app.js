const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
// allow cross origin request
app.use(cors());

// connect to mongodb
const uri =
  'mongodb+srv://admin:root@cluster0.4rucb.mongodb.net/graphQL-play?retryWrites=true&w=majority';
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log('server is listening on port: 4000');
});
