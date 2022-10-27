import type { NextPage } from "next";
import HomeNavWrapper from "../common/nav/HomeNavWrapper";
import { HomeNavMenuItems } from "../common/nav/models";

const Home: NextPage = () => {
	return (
		<HomeNavWrapper title="home" activeItem={HomeNavMenuItems.Home}>
			<p>This is the homepage</p>
		</HomeNavWrapper>
	);
};

export default Home;
