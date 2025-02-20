const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb+srv://gauravheer2005:Gaurav1234@cluster0.44sge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function startServer() {
    const app = express();

    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const database = client.db("test");  // Database name
    const collection = database.collection("blogs"); // Collection name

    // Define GraphQL schema
    const typeDefs = `                    
        type Blog {
            id: ID!                                  
            title: String! 
            body: String!
            coverImageURL: String
            createdBy: ID
            createdAt: String
            updatedAt: String
        }

        type Query {
            getBlogs: [Blog]
        }
    `;

    // Define resolvers
    const resolvers = {
        Query: {
            getBlogs: async () => {
                try {
                    const blogs = await collection.find().toArray();
                    return blogs.map(blog => ({
                        id: blog._id.toString(),
                        title: blog.title,
                        body: blog.body,
                        coverImageURL: blog.coverImageURL,
                        createdBy: blog.createdBy?.toString(),
                        createdAt: blog.createdAt.toISOString(),
                        updatedAt: blog.updatedAt.toISOString()
                    }));
                } catch (error) {
                    console.error("Error fetching blogs:", error);
                    throw new Error("Failed to fetch blogs");
                }
            }
        }
    };

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    app.use(bodyParser.json());
    app.use(cors());
    app.use('/graphql', expressMiddleware(server));

    app.listen(8000, () => console.log("🚀 Server Started at PORT 8000"));
}

startServer().catch(err => console.error("Server startup error:", err));
