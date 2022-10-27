import { NextPage } from "next";
import HomeNavWrapper from "../../common/nav/HomeNavWrapper";
import { Puzzle } from "../../models/puzzles";

type AllProps = {
	puzzles: Puzzle[];
};

const All: NextPage<AllProps> = (props) => {
	const { puzzles } = props;

	return (
		<HomeNavWrapper title={"All Puzzles"}>
			<>
				{puzzles.map((p) => (
					<li key={p.answer}>{p.answer}</li>
				))}
			</>
		</HomeNavWrapper>
	);
};

export default All;
