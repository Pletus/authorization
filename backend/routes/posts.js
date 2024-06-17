import express from 'express';
import requireAuth from '../requireAuth.js';
const postRouter = express.Router();

const posts = [{ id: 0, title: 'Awesome Auth', body: 'Authentification and Authorization are awesome' }];

postRouter.get('/', (req, res) => res.json(posts));
postRouter.post('/', requireAuth, (req, res) => {
    const id = posts.length;
    const newPost = req.body;
    posts.push({ id, ...newPost });
    res.json(posts);
});

export default postRouter;