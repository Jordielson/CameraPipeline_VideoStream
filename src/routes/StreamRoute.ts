
import express from 'express';
import { streamController } from '../controllers/StreamController';

const streamRouter = express.Router()

streamRouter.get('/', (req : any, res : any) => {
   res.send('Bem-vindo!')
})

streamRouter.post(
   '/stream',
   (req : any, res : any) => streamController.startStream(req, res)
);
streamRouter.delete(
   '/stream/:id',
   (req : any, res : any) => streamController.stopStream(req, res)
);

export default streamRouter;