import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
require('dotenv').config();
import noticiasRoutes from "./routes/noticias.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import authRoutes from "./routes/auth.routes";

// Settings
const app = express();
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('estoy en el puerto ' + app.get('port'));
});

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/api/rollingnews/', noticiasRoutes);
app.use('/api/rollingnews/usuarios/', usuariosRoutes);
app.use('/api/rollingnews/usuarios/auth', authRoutes);