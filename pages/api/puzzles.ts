import type { NextApiRequest, NextApiResponse } from "next";
import PuzzlesController from "../../backend/controllers/puzzles.controller";

export default function puzzlesHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			// Get data from your database
			PuzzlesController.getAllPuzzles(req, res);
			break;
		case "POST":
			// Update or create data in your database
			PuzzlesController.createPuzzle(req, res);
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
