import { Request, Response } from 'express';
import { Movie } from '../database/models/Movie';

class MovieController {
  async create(req: Request, res: Response) {
    const { title, background_img, rating } = req.body;
    const movieModel = await Movie.create({
      title,
      background_img,
      rating,
    });
    return res.status(201).json(movieModel);
  }

  async get(req: Request, res: Response): Promise<unknown> {
    try {
      const result = await Movie.findAll();
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send('Error');
    }
  }
}
// title,
// background_img,
// rating,

export default new MovieController();
