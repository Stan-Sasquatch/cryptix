import type { NextPage } from "next";
import Head from "next/head";
import { Puzzle } from "../../models/puzzles";

type PuzzlesProps = {
	puzzle: Puzzle | null;
};

const Puzzles: NextPage<PuzzlesProps> = (props) => {
	const { puzzle } = props;

	const detailBody = (puzzle: Puzzle) => {
		const clues = puzzle && puzzle.clues.map((x) => <li key={x.word}>{x.word}</li>);

		return (
			<main>
				<h1>{puzzle.answer}</h1>
				{clues}
			</main>
		);
	};
	return (
		<>
			<Head>
				<title>Detail</title>
			</Head>
			{puzzle && detailBody(puzzle)}
		</>
	);
};

export default Puzzles;
