import type { NextApiRequest, NextApiResponse } from "next";
import PuzzlesController from "../../../backend/controllers/puzzles.controller";

export default function puzzlesHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			return PuzzlesController.getPuzzle(req, res);
		case "PUT":
			return PuzzlesController.updatePuzzle(req, res);
		case "DELETE":
			return PuzzlesController.deletePuzzle(req, res);
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
