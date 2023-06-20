import express, { urlencoded } from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import './data/dbconexion.js'
import morgan from 'morgan'
import Usuarios from './routes/usuarios.routes.js'

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(Usuarios)


app.listen(PORT, ()=>{
    console.log(`server listen on port ${PORT}`);
})