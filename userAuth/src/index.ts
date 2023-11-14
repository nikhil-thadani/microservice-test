import express, {NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet'
import {handleErrorResponse} from './utls/response-handlers.js';
import mainRouter from './routes/index.js';

const app = express();

app.use(cors({origin:["*"]}))
app.use(express.json());

app.use(helmet())
app.use(morgan('dev'));

app.use('/userauth', mainRouter)

app.use((req,res,next) => {
  return handleErrorResponse(res,{error:"unknown endpoint"})
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return handleErrorResponse(res,err)
})


app.listen(5001,()=>console.log("SERVER OPEN"))
