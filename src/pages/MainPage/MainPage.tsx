import { Outlet } from "react-router-dom";
import AsideBar from "../../components/AsideBar/AsideBar";
import styles from "./MainPage.module.css";

function MainPage(): JSX.Element {
	return (
		<main style={{ width: "100%", height: "100%", display: "flex" }}>
			<AsideBar />
			<div className={styles.mainContainer}>
				<Outlet />
			</div>
		</main>
	);
}

export default MainPage;
