import type { NextPage } from "next";
import Head from "next/head";
import { usePuzzle } from "../queries";

type PuzzlesProps = {
	id: string;
};

const Puzzles: NextPage<PuzzlesProps> = (props) => {
	const { data, isLoading } = usePuzzle(props.id);

	if (isLoading) {
		return (
			<>
				<Head>
					<title>Puzzles</title>
				</Head>

				<main>
					<h1>...Loading</h1>
				</main>
			</>
		);
	}
	const clues = data && data.clues.map((x) => <li key={x.word}>{x.word}</li>);
	return (
		<>
			<Head>
				<title>Puzzles</title>
			</Head>

			<main>
				<h1>{data?.answer}</h1>
				{clues}
			</main>
		</>
	);
};

export default Puzzles;
