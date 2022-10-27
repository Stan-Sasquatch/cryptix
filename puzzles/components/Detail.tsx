import type { NextPage } from "next";
import HomeNavWrapper from "../../common/nav/HomeNavWrapper";
import { Puzzle } from "../../models/puzzles";

type detailProps = {
	puzzle: Puzzle | null;
};

const Detail: NextPage<detailProps> = (props) => {
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
		<HomeNavWrapper title={"Puzzle Detail"}>
			<>{puzzle && detailBody(puzzle)}</>
		</HomeNavWrapper>
	);
};

export default Detail;
