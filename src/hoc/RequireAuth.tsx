import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { UserContextType } from "../@types/user";

interface RequireAuthProps {
	children: JSX.Element;
}

function RequireAuth({ children }: RequireAuthProps): any {
	const location = useLocation();
	const authContext = useAuth();

	if (!authContext?.user) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return children;
}

export default RequireAuth;
