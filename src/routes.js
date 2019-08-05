import {Router} from 'express';

const routes = new Router();

routes.get('/', (req, res)=>{
    return res.json({message: 'API 1.0 Meetapp'});
})

module.exports = routes;