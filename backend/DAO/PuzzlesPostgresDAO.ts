import { PuzzleBaseModel, PuzzleEditModel } from "../../models/puzzles";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class PuzzlesMongoDAO {
	static async getPuzzleById(id: string) {}

	static async getAllPuzzles() {}

	static async createPuzzle(data: PuzzleBaseModel) {
		await prisma.puzzle.create({
			data: {
				answer: data.answer,
				clues: {
					create: data.clues,
				},
			},
		});
	}

	static async updatePuzzle(model: PuzzleEditModel) {}

	static async deletePuzzle(puzzleId: any) {}
}
