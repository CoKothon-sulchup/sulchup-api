import express from 'express';
import { body, param } from 'express-validator';

import { db } from '../modules';

const note = express.Router();

note.get('/', (req, res) => {
  db.note.findMany().then((notes) => {
    res.json({
      status: 'OK',
      data: notes,
    });
  }).catch((err) => {
    res.status(500).json({
      status: 'error',
    });
  });
});

note.get('/:id', param('id').notEmpty().isNumeric(), (req, res) => {
  const id = req.params?.id;

  db.note.findUniqueOrThrow({
    where: { id },
  }).then((notes) => {
    res.json({
      status: 'OK',
      data: notes,
    });
  }).catch((err) => {
    res.status(500).json({
      status: 'error',
    });
  });
});

note.post('/', [
  body('date').isDate(),
], (req: express.Request, res: express.Response) => {
  const date = req.body.date;

  db.note.create({
    select: null,
    data: {
      date,
      image_url: '',
    },
  })
  res.json({
    status: 'OK',
  });
});

export { note };
