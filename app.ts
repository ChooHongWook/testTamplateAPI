import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  // console.log('접속확인');
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`port:${PORT} server is on!`);
});
