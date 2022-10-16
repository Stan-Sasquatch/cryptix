import type { NextApiRequest, NextApiResponse } from "next";
import PuzzlesController from "../../../backend/controllers/puzzles.controller";

export default function puzzlesHandler(req: NextApiRequest, res: NextApiResponse) {
	const { method } = req;

	switch (method) {
		case "GET":
			PuzzlesController.getPuzzle(req, res);
			break;
		case "PUT":
			PuzzlesController.updatePuzzle(req, res);
			break;
		case "DELETE":
			PuzzlesController.deletePuzzle(req, res);
			break;
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
