import type { NextPage } from "next";
import HomeNav from "./HomeNav";
import NavWrapper from "./NavWrapper";

type HomeNavWrapperProps = {
	title: string;
	children: JSX.Element;
};

const HomeNavWrapper: NextPage<HomeNavWrapperProps> = ({ title, children }) => {
	return (
		<>
			<NavWrapper title={title} navbar={<HomeNav />}>
				{children}
			</NavWrapper>
		</>
	);
};

export default HomeNavWrapper;
