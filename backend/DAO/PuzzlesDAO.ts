import { PuzzleBaseModel, PuzzleEditModel } from "../../models/puzzles";
import prisma from "../../prisma/prisma";
export default class PuzzlesMongoDAO {
	static async getPuzzleById(id: string) {
		return await prisma.puzzle.findUnique({
			where: {
				id,
			},
			include: {
				clues: true,
			},
		});
	}

	static async getAllPuzzles() {
		return await prisma.puzzle.findMany({
			include: {
				clues: true,
			},
			orderBy: { createdAt: "desc" },
		});
	}

	static async createPuzzle(data: PuzzleBaseModel) {
		return await prisma.puzzle.create({
			data: {
				answer: data.answer,
				clues: {
					create: data.clues,
				},
			},
		});
	}

	static async updatePuzzle(model: PuzzleEditModel) {
		const deleteCurrentClues = model.clues.map((x) => prisma.clue.delete({ where: { id: x.id } }));

		const update = prisma.puzzle.update({
			where: {
				id: model.id,
			},
			data: {
				answer: model.answer,
				clues: {
					create: model.clues,
				},
			},
		});

		return await prisma.$transaction([...deleteCurrentClues, update]);
	}

	static async deletePuzzle(puzzleId: any) {
		return await prisma.puzzle.delete({
			where: {
				id: puzzleId,
			},
		});
	}
}
