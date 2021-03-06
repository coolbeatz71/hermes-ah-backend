import express from 'express';
import controllers from '../controllers';
import validations from '../helpers/validations';

const { articleController } = controllers;

const router = express.Router();

router.get(
  '/article/:id',
  validations.verifyToken,
  articleController.getOneArticle
);

export default router;
