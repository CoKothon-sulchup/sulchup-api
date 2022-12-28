import express from 'express';
import { body, param } from 'express-validator';

import { db } from '../modules';

const user = express.Router();

user.get('/:id', param('id').notEmpty().isNumeric(), (req, res) => {
  const id = req.params?.id;

  db.user.findUnique({
    where: { id },
  }).then((user) => {
    res.json({
      status: 'OK',
      data: user,
    });
  }).catch((err) => {
    res.status(500).json({
      status: 'error',
    });
  });
});

export { user };
