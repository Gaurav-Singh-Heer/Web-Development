const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");

async function startServer() {
    const app = express();
    const server = new ApolloServer({                         // typedef is a string and ! means field is required
        typeDefs: `                    
            type Todo{
                id:ID!                                  
                title: String! 
                completed: Boolean
            }
            type Query {
                getTodos: [Todo]
            }
        `,   
        resolvers: {
            Query:{
                getTodos: () => [{id: 1, title: 'Something Random', completed: false}]
            }
        },
    });                  // Will Configure the server here

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use('/graphql', expressMiddleware(server))

    app.listen(8000, () => console.log("Server Started at PORT 8000"))
}

startServer();