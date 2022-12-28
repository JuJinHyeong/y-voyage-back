import express from 'express';
import { ISong, Song } from '../db/models/song';

const router = express.Router();

router.get('/list', async (req, res, next) => {
  const songList = await Song.findAll({ order: ['id'], offset: 10, limit: 10 });
  const song = songList[0].toJSON<ISong>();
  res.send(song);
});

export default router;
