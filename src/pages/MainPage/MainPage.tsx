import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import AsideBar from "../../components/AsideBar/AsideBar";
import styles from "./MainPage.module.css";

function MainPage(): JSX.Element {
	return (
		<main style={{ width: "100vw", height: "100vh", display: "flex" }}>
			<AsideBar />
			<Container className={styles.mainContainer}>
				<Outlet />
			</Container>
		</main>
	);
}

export default MainPage;
