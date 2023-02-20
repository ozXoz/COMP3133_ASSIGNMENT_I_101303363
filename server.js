// Initialize Express ...
const express=require('express');
// Initialize Apollo Server ...
const {ApolloServer}=require('apollo-server-express' );
// Initialize Mongoose ...
 const mongoose =require('mongoose');
 //  Initialize  typeDefs ...
 const typeDefs=require('./typeDefs')
  //  Initialize  resolvers ...
  const resolvers=require('./resolvers')

 // Connecting to MongoDb ...

 mongoose.connect("mongodb+srv://101303363:2231874q@cluster2.m7zg6pv.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 const startServer=async()=>{
    const app=express();
    // ! interface Context Value //
    
    

    const apolloServer=new ApolloServer({
        // Where we write query and = typeDefs ...
        // which is all queries resolvers ...
        // For typeDefs abd resolvers we are going to define "gql" ...

        typeDefs,resolvers
    });
    await apolloServer.start()
    // apolloServer.applyMiddleware({app:app,path:"/home/register"})
    apolloServer.applyMiddleware({app:app})
    app.listen(4000,()=>{
        console.log("SERVER IS RUNNING !!!!")
    })
 }

 startServer();
 
