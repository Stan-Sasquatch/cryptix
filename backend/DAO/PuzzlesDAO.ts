import { Collection, ObjectId } from "mongodb";
import clientPromise from "../mongodbClientPromise";

export default class PuzzlesDAO {
	static async getCollectionConnection() {
		const client = await clientPromise;
		return client.db().collection("puzzles");
	}

	static async getPuzzleById(id: string) {
		const puzzles = await PuzzlesDAO.getCollectionConnection();

		try {
			return await puzzles.findOne({ _id: new ObjectId(id) });
		} catch (e) {
			console.error(`Unable to get puzzle: ${e}`);
			return { error: e };
		}
	}

	static async getAllPuzzles() {
		const puzzles = await PuzzlesDAO.getCollectionConnection();
		try {
			return puzzles.find({}).toArray();
		} catch (e) {
			console.error(`Unable to get puzzles: ${e}`);
			return { error: e };
		}
	}

	static async createPuzzle(answer: any, clues: any) {
		const puzzles = await PuzzlesDAO.getCollectionConnection();

		try {
			const date = new Date();
			const puzzleDoc = {
				answer,
				clues,
				date,
			};

			return await puzzles.insertOne(puzzleDoc);
		} catch (e) {
			console.error(`Unable to post puzzle: ${e}`);
			return { error: e };
		}
	}

	static async updatePuzzle(model: { id: string; answer: any; clues: any }) {
		const puzzles = await PuzzlesDAO.getCollectionConnection();

		try {
			const date = new Date();
			const updateResponse = await puzzles.updateOne(
				{ _id: new ObjectId(model.id) },
				{ $set: { answer: model.answer, clues: model.clues, date: date } }
			);

			return updateResponse;
		} catch (e) {
			console.error(`Unable to update puzzle: ${e}`);
			return { error: e };
		}
	}

	static async deletePuzzle(puzzleId: any) {
		const puzzles = await PuzzlesDAO.getCollectionConnection();
		try {
			const deleteResponse = await puzzles.deleteOne({
				_id: new ObjectId(puzzleId),
			});

			return deleteResponse;
		} catch (e) {
			console.error(`Unable to delete review: ${e}`);
			return { error: e };
		}
	}
}
