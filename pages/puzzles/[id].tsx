import type { NextPage } from "next";
import { useRouter } from "next/router";
import All from "../../puzzles/components/All";
import Detail from "../../puzzles/components/Detail";

const PuzzlesDetailPage: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	if (!id) {
		return <All />;
	}
	const puzzleId = Array.isArray(id) ? id[0] : id;
	return <Detail id={puzzleId} />;
};

export default PuzzlesDetailPage;
