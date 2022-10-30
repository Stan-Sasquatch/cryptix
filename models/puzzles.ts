export type Clue = {
	id: string;
	word: string;
	positionInClueWord: number;
	text: string;
	createdAt: Date;
};

export type Puzzle = PuzzleEditModel & {
	createdAt: Date;
};

export type PuzzleBaseModel = {
	answer: string;
	clues: Clue[];
};

export type PuzzleEditModel = PuzzleBaseModel & {
	id: string;
};
