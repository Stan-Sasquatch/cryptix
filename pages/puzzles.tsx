import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Puzzle } from "../models/puzzles";
import Puzzles from "../puzzles/components/All";
import { getAllPuzzles } from "../puzzles/queries";

export const getServerSideProps: GetServerSideProps<{ puzzles: Puzzle[] }> = async (context) => {
	const puzzles = await getAllPuzzles();
	return { props: { puzzles } };
};

const PuzzlesPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
	return <Puzzles {...props} />;
};

export default PuzzlesPage;
