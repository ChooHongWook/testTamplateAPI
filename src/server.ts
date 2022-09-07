import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routesRouter from './routes';
dotenv.config();

const server = express();
const PORT = process.env.PORT || 4000;

server.use('/api/v1', routesRouter);
server.get('/', (req: Request, res: Response) => {
  // console.log('접속확인');
  res.send('v1 test');
});

server.listen(PORT, () => {
  console.log(`port:${PORT} server is on!`);
});
