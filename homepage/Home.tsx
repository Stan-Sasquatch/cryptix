import type { NextPage } from "next";
import HomeNavWrapper from "../common/nav/HomeNavWrapper";

const Home: NextPage = () => {
	return (
		<HomeNavWrapper title="home">
			<p>This is the homepage</p>
		</HomeNavWrapper>
	);
};

export default Home;
