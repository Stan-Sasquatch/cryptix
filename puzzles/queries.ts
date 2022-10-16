import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { puzzle } from "../models/puzzles";

const puzzlesApi = "/api/puzzles";
async function getAllPuzzles() {
	const result = await axios.get(puzzlesApi);
	return result.data as puzzle[];
}

async function getPuzzle(id: string) {
	const result = await axios.get(`${puzzlesApi}/${id}`);
	return result.data as puzzle;
}

export const useAllPuzzles = () => useQuery(["GetPuzzles"], getAllPuzzles);
export const usePuzzle = (puzzleId: string) => useQuery(["GetPuzzle", puzzleId], () => getPuzzle(puzzleId));
