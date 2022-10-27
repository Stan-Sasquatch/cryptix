import Link from "next/link";
import { Menu } from "semantic-ui-react";
import { HomeNavMenuItems } from "./models";

type HomeNavProps = {
	activeItem: HomeNavMenuItems;
};

const HomeNav = ({ activeItem }: HomeNavProps) => {
	return (
		<Menu fluid vertical>
			<Link href="/">
				<Menu.Item name={HomeNavMenuItems[HomeNavMenuItems.Home]} active={activeItem === HomeNavMenuItems.Home} />
			</Link>
			<Link href="/puzzles">
				<Menu.Item name={HomeNavMenuItems[HomeNavMenuItems.Puzzles]} active={activeItem === HomeNavMenuItems.Puzzles} />
			</Link>
		</Menu>
	);
};

export default HomeNav;
