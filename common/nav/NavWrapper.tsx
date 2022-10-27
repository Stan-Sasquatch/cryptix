import type { NextPage } from "next";
import Head from "next/head";
import { Grid } from "semantic-ui-react";

type NavWrapperProps = {
	title: string;
	navbar: JSX.Element;
	children: JSX.Element;
};

const NavWrapper: NextPage<NavWrapperProps> = ({ title, children, navbar }) => {
	return (
		<div>
			<Head>
				<title>{`puzzle app ${title}`}</title>
			</Head>

			<Grid textAlign="center">
				<Grid.Row>
					<h1>{title}</h1>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={3}>{navbar}</Grid.Column>
					<Grid.Column width={13}>{children}</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default NavWrapper;
