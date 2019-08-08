import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'API 1.0 Meetapp' });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

export default routes;
