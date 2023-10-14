import { Routes, Route, useNavigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import MainPage from "./pages/MainPage/MainPage";
import { useEffect } from "react";
import { AuthProvider } from "./hoc/AuthProvider";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NftPage from "pages/NftPage/NftPage";
import { ToastContainer } from "react-toastify";

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
			<AuthProvider>
				<Routes>
					<Route
						path="/*"
						element={
							// <RequireAuth>
							<MainPage />
							// </RequireAuth>
						}
					>
						<Route path="profile" element={<ProfilePage />} />
						<Route path="collection" element={<NftPage />} />
						<Route path="market" element={<h1>market</h1>} />
					</Route>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/error" element={<ErrorPage errorCode={403} errorMessage={"У вас нет расширения METAMASK"} />} />
				</Routes>
			</AuthProvider>
			<ToastContainer />
		</div>
	);
}

export default App;
