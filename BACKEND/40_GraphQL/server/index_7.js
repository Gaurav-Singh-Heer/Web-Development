const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { default: axios } = require("axios"); // Came Automatically as we wrote axios in resolvers -> Query
// OR
const axios = require("axios");

async function startServer() {
    const app = express();
    const server = new ApolloServer({                         // typedef is a string and ! means field is required
        typeDefs: `    
            type User {
                id: ID!
                name: String!
                username: String!
                email: String!
                phone: String!
                website: String!
            }                
            type Todo{
                id:ID!                                  
                title: String! 
                completed: Boolean
                user: User
            }
            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
                getUser(id: ID!) : User
            }
        `,   
        resolvers: {
            Todo:{ // if anyone try to fetch user of Todo then whatever Todo u are fetching that Todo will be available over here
                // user: (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data, // Copied the code of getUser Below
                user: async (todo) => 
                    (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`)).data,
            },
            Query:{
                getTodos: async () =>
                    (await axios.get("https://jsonplaceholder.typicode.com/todos")).data, // Calling API and Returning DATA
                getAllUsers: async() =>
                    (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
                getUser: async(parent, {id}) =>                    // ignore first parameter we will have 2nd Parameter
                    (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data,
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