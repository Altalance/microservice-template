import express, { Request, Response } from 'express';

const router = express.Router()

router.get("/dummy", (request: Request, response: Response): void => {
	response.status(200).json({ message: "pasta with no sauce"})
});

export default router;