import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'API 1.0 Meetapp' });
});

routes.get('/user', async (req, res) => {
    const user = await User.create({
        name: 'Thalysson Nascimento',
        email: 'thalysson_nascimento@hotmail.com',
        password_hash: '12345689',
    });
    return res.json(user);
});

export default routes;
