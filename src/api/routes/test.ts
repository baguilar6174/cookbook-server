import { Router, Request, Response } from 'express';

const testRouter = Router();

// Default Response Running Serve
testRouter.get('', (req: Request, res: Response) => {
    return res.json({
        status: 200,
        message: 'Server online',
        date: new Date(),
    });
});

export default testRouter;