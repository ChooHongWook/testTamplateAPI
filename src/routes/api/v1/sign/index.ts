import express from 'express';
import signUpRouter from './up';

const signRouter = express.Router();

// signRouter.use('/in');
// signRouter.use('/out');
signRouter.use('/up', signUpRouter);

export default signRouter;
