import type { NextApiRequest, NextApiResponse } from "next";
import PuzzlesController from "../../backend/controllers/puzzles.controller";

export default function puzzlesHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			// Get data from your database
			return PuzzlesController.getAllPuzzles(req, res);
		case "POST":
			// Update or create data in your database
			return PuzzlesController.createPuzzle(req, res);
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
