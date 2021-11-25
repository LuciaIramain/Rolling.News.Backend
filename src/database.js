import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/rollingnews';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('Conexión exitosa a la BD');
});