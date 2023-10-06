import { Outlet } from "react-router-dom";
import AsideBar from "../../components/AsideBar/AsideBar";

function MainPage(): JSX.Element {
	return (
		<main style={{width: '100%', height: '100%', display: 'flex'}}>
			<AsideBar />
			<Outlet/>
		</main>
	);
}

export default MainPage;
