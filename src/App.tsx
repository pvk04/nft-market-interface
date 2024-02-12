import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "hook/useAuth";

import { AuthProvider } from "./hoc/AuthProvider";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
// import RequireRole from "hoc/RequireRole";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NftPage from "pages/NftPage/NftPage";
import CreationNft from "components/CreationNft/CreationNft";
import MarketPage from "pages/MarketPage/MarketPage";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
	const navigate = useNavigate();
	const { user } = useAuth();

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

		window.ethereum?.on("accountsChanged", handleAccountChange);

		return () => {
			window.ethereum?.removeListener("accountsChanged", handleAccountChange);
		};
	}, []);

	const handleAccountChange = (...args: any[]) => {
		const accounts = args[0];

		if (accounts[0] !== user.address) {
			navigate("/login");
		}
	};

	return (
		<div className="App">
			<AuthProvider>
				<Routes>
					<Route
						path="/*"
						element={
							<RequireAuth>
								<MainPage />
							</RequireAuth>
						}
					>
						<Route path="profile" element={<ProfilePage />} />
						<Route path="collection" element={<NftPage />} />
						<Route
							path="newNFT"
							element={
								// <RequireRole roles={[2]}>
									<CreationNft />
								// </RequireRole>
							}
						/>
						<Route path="market" element={<MarketPage />} />
					</Route>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/error" element={<ErrorPage errorCode={403} errorMessage={"У вас нет расширения METAMASK"} />} />
				</Routes>
			</AuthProvider>
			<ToastContainer position="bottom-right" autoClose={1500} hideProgressBar closeOnClick draggable theme={"dark"} />
		</div>
	);
}

export default App;
