import { NextPage } from "next";
import HomeNavWrapper from "../../common/nav/HomeNavWrapper";
import { Puzzle } from "../../models/puzzles";
import Link from "next/link";
import { Table } from "semantic-ui-react";
import { HomeNavMenuItems } from "../../common/nav/models";

type AllProps = {
	puzzles: Puzzle[];
};

const All: NextPage<AllProps> = (props) => {
	const { puzzles } = props;

	return (
		<HomeNavWrapper title={"All Puzzles"} activeItem={HomeNavMenuItems.Puzzles}>
			<Table celled>
				<Table.Body>
					{puzzles.map((p) => (
						<Link href={`/puzzles/${p._id}`} key={p.answer}>
							<Table.Row>
								{p.answer} {p._id}
							</Table.Row>
						</Link>
					))}
				</Table.Body>
			</Table>
		</HomeNavWrapper>
	);
};

export default All;
