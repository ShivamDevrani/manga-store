const mongoose=require('mongoose');

require('dotenv').config();

// const LOCAL_URL=process.env.LOCAL_URL;
const DB_URL=process.env.DB_URL;

mongoose.connect(DB_URL);

const db=mongoose.connection;


db.on('connected',()=>{
    console.log('mongodb is connected');
})

db.on('disconnected',()=>{
    console.log('mongodb is disconnected');

})

db.on('error',(err)=>{
    console.log(err);
})


module.exports=db;