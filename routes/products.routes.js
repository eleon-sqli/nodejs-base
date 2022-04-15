import express from 'express';

export function routes(controller) {
  const router = express.Router();

  router.get('/', (req, res) => controller.getAll(req, res));
  router.get('/edit', (req, res) => controller.editForm(req, res));
  router.post('/create', (req, res) => controller.create(req, res));
  router.get('/:id', (req, res) => controller.getOne(req, res));

  return router;
}
