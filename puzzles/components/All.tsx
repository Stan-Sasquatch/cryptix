import type { NextPage } from "next";
import Head from "next/head";
import { useAllPuzzles } from "../queries";

const Puzzles: NextPage = () => {
	const { data, isLoading } = useAllPuzzles();

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

	const puzzles = data && data.map((x) => <li key={x.id}>{x.answer}</li>);

	return (
		<>
			<Head>
				<title>Puzzles</title>
			</Head>

			<main>
				<h1>Puzzles</h1>
				{puzzles}
			</main>
		</>
	);
};

export default Puzzles;
