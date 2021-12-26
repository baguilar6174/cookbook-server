import { Router } from 'express';
import categoriesRouter from './categories';
import ingredientsRouter from './ingredients';
import recipesRouter from './recipes';
import reviewsRouter from './reviews';
import testRouter from './test';

const router = Router();

router.use('', testRouter);
router.use('/categories', categoriesRouter);
router.use('/recipes', recipesRouter);
router.use('/ingredients', ingredientsRouter);
router.use('/reviews', reviewsRouter);

export default router;