import { Routes, Route, useNavigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import MainPage from "./pages/MainPage/MainPage";
import { useEffect } from "react";

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		function checkMetamask() {
			console.log(window.ethereum);

			if (!window.ethereum) {
				navigate("/error");
				return;
			}

			navigate("/");
		}
		checkMetamask();
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<RequireAuth>
							<MainPage />
						</RequireAuth>
					}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/error" element={<ErrorPage errorCode={403} errorMessage={"У вас нет расширения METAMASK"} />} />
			</Routes>
		</div>
	);
}

export default App;