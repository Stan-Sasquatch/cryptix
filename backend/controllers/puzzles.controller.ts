import { Request, Response } from "express";
import { NextApiRequest, NextApiResponse } from "next";
import PuzzlesMongoDAO from "../DAO/PuzzlesMongoDAO";
import { PuzzleBaseModel, PuzzleEditModel } from "../../models/puzzles";
import { isError } from "../utils/helpers";
import PuzzlesPostgresDAO from "../DAO/PuzzlesPostgresDAO";

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
			const response = await PuzzlesMongoDAO.getPuzzleById(req.query.id as string);

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
			const response = await PuzzlesMongoDAO.getAllPuzzles();

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
			const puzzleResponse = await PuzzlesMongoDAO.updatePuzzle(model);
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
			const puzzleId = req.query.id as string;
			await PuzzlesMongoDAO.deletePuzzle(puzzleId);
		};

		tryCatchWrapper(handleDelete)(res);
	}
}
