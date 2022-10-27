import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Puzzle } from "../models/puzzles";
import All from "../puzzles/components/All";
import { getAllPuzzles } from "../puzzles/queries";

export const getServerSideProps: GetServerSideProps<{ puzzles: Puzzle[] }> = async (context) => {
	const puzzles = await getAllPuzzles();
	return { props: { puzzles } };
};

const PuzzlesPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
	return <All {...props} />;
};

export default PuzzlesPage;
