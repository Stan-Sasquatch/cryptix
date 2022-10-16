import type { NextPage } from "next";
import Head from "next/head";
import { Puzzle } from "../../models/puzzles";

type PuzzlesProps = {
	puzzles: Puzzle[];
};

const Puzzles: NextPage<PuzzlesProps> = (props) => {
	const { puzzles } = props;

	return (
		<>
			<Head>
				<title>Puzzles</title>
			</Head>

			<main>
				<h1>Puzzles</h1>
				{puzzles.map((p) => (
					<li key={p.answer}>{p.answer}</li>
				))}
			</main>
		</>
	);
};

export default Puzzles;
