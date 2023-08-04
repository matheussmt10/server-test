import express from 'express';
import MovieController from './controller/MovieController';

const router = express.Router();

// router.post('/savemovie', MovieController.create)

router.get('/movie', MovieController.get);
router.post('/movie', MovieController.create);
export { router };
