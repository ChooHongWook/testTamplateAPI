import express from 'express';
import signRouter from './api/v1/sign';
const routesRouter = express.Router();

routesRouter.get('/', (req, res) => {
  res.send('pong');
});

routesRouter.use('/sign', signRouter);

export default routesRouter;
