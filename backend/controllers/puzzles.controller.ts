import { Request, Response } from "express";
import { NextApiRequest, NextApiResponse } from "next";
import PuzzlesDAO from "../DAO/PuzzlesDAO";
import { isError } from "../utils/helpers";

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
			const response = await PuzzlesDAO.getPuzzleById(req.params.id);

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
			const response = await PuzzlesDAO.getAllPuzzles();

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
			const { answer, clues } = req.body;
			await PuzzlesDAO.createPuzzle(answer, clues);
		};

		tryCatchWrapper(handleCreate)(res);
	}

	static async updatePuzzle(req: NextApiRequest, res: NextApiResponse) {
		const handleUpdate = async () => {
			const model = req.body;
			const puzzleResponse = await PuzzlesDAO.updatePuzzle(model);

			if (isError(puzzleResponse)) {
				const { error } = puzzleResponse;
				res.status(400).json({ error });
			} else if (puzzleResponse.modifiedCount === 0) {
				throw new Error("unable to update puzzle");
			}
		};

		tryCatchWrapper(handleUpdate)(res);
	}

	static async deletePuzzle(req: NextApiRequest, res: NextApiResponse) {
		const handleDelete = async () => {
			const puzzleId = req.params.id;
			await PuzzlesDAO.deletePuzzle(puzzleId);
		};

		tryCatchWrapper(handleDelete)(res);
	}
}
