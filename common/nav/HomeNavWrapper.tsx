import type { NextPage } from "next";
import HomeNav from "./HomeNav";
import { HomeNavMenuItems } from "./models";
import NavWrapper from "./NavWrapper";

type HomeNavWrapperProps = {
	title: string;
	children: JSX.Element;
	activeItem: HomeNavMenuItems;
};

const HomeNavWrapper: NextPage<HomeNavWrapperProps> = ({ title, children, activeItem }) => {
	return (
		<NavWrapper title={title} navbar={<HomeNav activeItem={activeItem} />}>
			{children}
		</NavWrapper>
	);
};

export default HomeNavWrapper;
