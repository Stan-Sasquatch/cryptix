type Clue = {
	word: string;
	positionInClueWord: number;
	text: string;
};

export type Puzzle = PuzzleEditModel & {
	date: Date;
};

export type PuzzleBaseModel = {
	answer: string;
	clues: Clue[];
};

export type PuzzleEditModel = PuzzleBaseModel & {
	_id: string;
};
