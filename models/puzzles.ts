type clue = {
	word: string;
	positionInClueWord: number;
	text: string;
};

export type puzzle = puzzleEditModel & {
	date: Date;
};

export type puzzleBaseModel = {
	answer: string;
	clues: clue[];
};

export type puzzleEditModel = puzzleBaseModel & {
	id: string;
};
