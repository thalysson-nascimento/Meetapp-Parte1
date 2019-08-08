import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'API 1.0 Meetapp' });
});

routes.post('/users', UserController.store);

export default routes;
