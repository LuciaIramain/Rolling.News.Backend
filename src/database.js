import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017/rollingnews';
const url = 'mongodb+srv://luciairamain:Lu20Ir21@cluster0.0lnpe.mongodb.net/rollingnews';


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('Conexión exitosa a la BD');
});