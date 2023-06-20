import mongoose from 'mongoose'
console.log(process.env.MONGO_URL);
(async()=>{
 try {
    const db= await mongoose.connect(process.env.MONGO_URL)
    console.log("database is conect to: "+ db.connection.name);
 } catch (error) {
    console.log(error);
 }
})()