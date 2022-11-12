import { NextApiRequest, NextApiResponse } from "next";
import { PuzzleBaseModel, PuzzleEditModel } from "../../models/puzzles";
import { isError } from "../utils/helpers";
import PuzzlesPostgresDAO from "../DAO/PuzzlesDAO";

const tryCatchWrapper = (executable: () => Promise<void>) => async (res: NextApiResponse) => {
	try {
		await executable();
		res.json({ status: "success" });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

export default class PuzzlesController {
	static async getPuzzle(req: NextApiRequest, res: NextApiResponse) {
		try {
			const response = await PuzzlesPostgresDAO.getPuzzleById(req.query.id as string);

			if (isError(response)) {
				const { error } = response;
				res.status(400).json({ error });
			}

			res.json(response);
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	}

	static async getAllPuzzles(req: NextApiRequest, res: NextApiResponse) {
		try {
			const response = await PuzzlesPostgresDAO.getAllPuzzles();

			if (isError(response)) {
				const { error } = response;
				res.status(400).json({ error });
			}

			res.json(response);
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	}

	static async createPuzzle(req: NextApiRequest, res: NextApiResponse) {
		const handleCreate = async () => {
			const model: PuzzleBaseModel = req.body;

			await PuzzlesPostgresDAO.createPuzzle(model);
		};

		tryCatchWrapper(handleCreate)(res);
	}

	static async updatePuzzle(req: NextApiRequest, res: NextApiResponse) {
		const handleUpdate = async () => {
			const model: PuzzleEditModel = req.body;
			const puzzleResponse = await PuzzlesPostgresDAO.updatePuzzle(model);
			if (isError(puzzleResponse)) {
				const { error } = puzzleResponse;
				res.status(400).json({ error });
			}
		};

		tryCatchWrapper(handleUpdate)(res);
	}

	static async deletePuzzle(req: NextApiRequest, res: NextApiResponse) {
		const handleDelete = async () => {
			const puzzleId = req.query.id as string;
			await PuzzlesPostgresDAO.deletePuzzle(puzzleId);
		};

		tryCatchWrapper(handleDelete)(res);
	}
}
