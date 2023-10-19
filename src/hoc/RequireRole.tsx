import { Navigate } from "react-router-dom";
import { useAuth } from "hook/useAuth";

interface RequireRoleProps {
	children: JSX.Element;
	roles: number[];
}

function RequireRole({ children, roles }: RequireRoleProps): any {
	const { user } = useAuth();

	if (!roles.includes(Number(user.role))) {
		return <Navigate to={"/"} />;
	}

	return children;
}

export default RequireRole;
