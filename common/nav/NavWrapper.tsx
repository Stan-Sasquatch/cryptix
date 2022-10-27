import type { NextPage } from "next";
import Head from "next/head";
import { Container, Grid } from "semantic-ui-react";
import styles from "styles/NavWrapper.module.css";

type NavWrapperProps = {
	title: string;
	navbar: JSX.Element;
	children: JSX.Element;
};

const NavWrapper: NextPage<NavWrapperProps> = ({ title, children, navbar }) => {
	return (
		<>
			<Head>
				<title>{`puzzle app ${title}`}</title>
			</Head>

			<Grid className={styles.wrapper}>
				<Grid.Column width={3}>
					<Container className={styles.verticalNav}>{navbar}</Container>
				</Grid.Column>
				<Grid.Column width={13}>
					<Grid.Row>
						<h1>{title}</h1>
					</Grid.Row>
					<Grid.Row textAlign="center">{children}</Grid.Row>
				</Grid.Column>
			</Grid>
		</>
	);
};

export default NavWrapper;
