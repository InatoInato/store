import { Router } from "express";

const router = new Router();

router.post('/register');
router.post('/login');
router.get('/auth', (req, res) => {
    res.json({message: "Working"})
});

export default router;