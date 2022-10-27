import Link from "next/link";
import { Menu } from "semantic-ui-react";

const HomeNav = () => {
	return (
		<Menu fluid vertical>
			<Link href="/">
				<Menu.Item name="home" />
			</Link>
			<Link href="/puzzles">
				<Menu.Item name="puzzles" />
			</Link>
		</Menu>
	);
};

export default HomeNav;
