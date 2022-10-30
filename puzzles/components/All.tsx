import { NextPage } from "next";
import HomeNavWrapper from "../../common/nav/HomeNavWrapper";
import { Puzzle } from "../../models/puzzles";
import Link from "next/link";
import { Grid, Table } from "semantic-ui-react";
import { HomeNavMenuItems } from "../../common/nav/models";

type AllProps = {
	puzzles: Puzzle[];
};

const All: NextPage<AllProps> = (props) => {
	const { puzzles } = props;

	return (
		<HomeNavWrapper title={"All Puzzles"} activeItem={HomeNavMenuItems.Puzzles}>
			<Grid>
				<Grid.Column width={8}>
					<Table celled>
						<Table.Body>
							{puzzles.map((p) => (
								<Table.Row key={p.answer}>
									<Table.Cell>
										<Link href={`/puzzles/${p.id}`}>{p.answer + p.id}</Link>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</Grid.Column>
			</Grid>
		</HomeNavWrapper>
	);
};

export default All;
