const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json());

let users=[
    {id:1,name:'Alice',email:'alice@gmail.com'},
    {id:2,name:'Bob',email:'bob@gmail.com'},
    {id:3,name:'Charlie',email:'charlie@gmail.com'},
    {id:4,name:'Diana',email:'diana@gmail.com'}
];

app.get('/users',(req,res)=>{
    res.json(users);
});

app.get('/users/:id',(req,res)=>{   
    const userId=parseInt(req.params.id);
    const user=users.find(u=>u.id===userId);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({message:'User not found'});
    }
});

app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.status(201).json(newUser);
});


app.put('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const userIndex=users.findIndex(u=>u.id===userId);
    if(userIndex!==-1){
        users[userIndex]={...users[userIndex],...req.body};
        res.json(users[userIndex]);
    }else{
        res.status(404).json({message:'User not found'});
    }   
});
app.delete('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const userIndex=users.findIndex(u=>u.id===userId);
    if(userIndex!==-1){
        const deletedUser=users.splice(userIndex,1);
        res.json(deletedUser[0]);
    }   else{
        res.status(404).json({message:'User not found'});
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
