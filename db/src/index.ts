import express, {NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import {handleErrorResponse} from './utls/response-handlers.js';
import mainRouter from './routes/index.js';
import {config} from 'dotenv';
import connectToDb from './connection/index.js';

const app = express();
config();

app.use(cors({origin: ["*"]}));
app.use(express.json());

app.use(helmet());
app.use(morgan('dev'));

app.use('/db', mainRouter);

app.use((req, res, next) => {
  return handleErrorResponse(res, {error: "unknown endpoint"});
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return handleErrorResponse(res, err);
});

connectToDb().then(() => {
  app.listen(5004, () => console.log("DB SERVER OPEN"));

}).catch(err => {
  console.log(err);
  process.exit(0);
});

