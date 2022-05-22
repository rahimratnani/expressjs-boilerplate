import express from 'express';
import { mockController } from './user.controllers.js';

const router = express.Router();

/* 
/api/user
*/
router.route('/').get(mockController).post(mockController);

// /api/item/:id
router
  .route('/:id')
  .get(mockController)
  .put(mockController)
  .delete(mockController);

export default router;
