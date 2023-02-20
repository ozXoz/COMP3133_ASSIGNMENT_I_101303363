// Resolvers
const Emp =require('./models/Employee');
const Usr =require('./models/User')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const resolvers={
    Query:{
    
        getAll:async()=>{ // Fetching from
            return await Emp.find();

        },
        getPost:async(parent,args,context,info)=>{
            const {id}=args;
            return await Emp.findById(id);

        },
        async login(parent,args,context,info) {
            const{email,password}=arg
           
            const user = Usr.find(user => user.email === email);
      
            if (!user) {
              throw new Error('User not found');
            }
      
            const isPasswordMatch = await bcrypt.compare(input.password, user.password);
      
            if (!isPasswordMatch) {
              throw new Error('Incorrect password');
            }
      
            const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
      
            return { ...user, token };
          },
    },
    Mutation:{
        createPostEmployee: async (parent,args,context,info)=>{
            const {first_name,last_name,email,gender,salary}=args.post
            const post= await new Emp({first_name,last_name,email,gender,salary}).save();
            return post;
        },
        UpdateEmployee: async (parent,args,context,info)=>{
            const {id}=args;
            const {first_name,last_name,email,gender,salary}=args.post

            const post= await  Emp.findByIdAndUpdate(
                id,
                {first_name,
                last_name,
                email
                ,gender,
                salary},{new:true});
            return post;
        },
        DeleteEmployee:async(parent,args,context,info)=>{
            const {id}=args;
            const post=await Emp.findByIdAndDelete(id)
            return "It has been successfully deleted . . . ";
        },
        signUp: async (parent,args,context,info)=>{
            const {username,password,email}=args.post
            const post= await new Usr({username,email,password}).save();
            return post;
        },
        
    },
};



module.exports=resolvers;


// GetAll Comes from typeDefs.js Line 16