import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Puzzle } from "../../models/puzzles";
import Detail from "../../puzzles/components/Detail";
import { getPuzzle } from "../../puzzles/queries";

export const getServerSideProps: GetServerSideProps<{ puzzle: Puzzle | null }> = async (context) => {
	const puzzle = await getPuzzle(context.params?.id as string);
	return { props: { puzzle } };
};

const PuzzlesDetailPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
	return <Detail {...props} />;
};

export default PuzzlesDetailPage;
