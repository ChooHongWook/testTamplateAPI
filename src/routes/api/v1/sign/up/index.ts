import express from 'express';

const signUpRouter = express.Router();

signUpRouter.get('/', (req, res) => {
  res.send('signUP send');
});
signUpRouter.post('/', require('./post'));

export default signUpRouter;
