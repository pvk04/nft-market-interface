import { useEffect } from "react";
import { useAuth } from "../../hook/useAuth";
import { Card } from "react-bootstrap";

import styles from "./ProfilePage.module.css";

function ProfilePage() {
	const { user, refreshBalance } = useAuth();

	useEffect(() => {
		refreshBalance();
	}, []);

	return (
		<Card>
			<Card.Header className={styles.profileHeader}>
				<img src="/images/profilePicture.jpg" alt="profile avatar" className={styles.avatar} />
				<div className={styles.profileHeaderInfo}>
					<h1>{user.login}</h1>
				</div>
			</Card.Header>
			<Card.Body>
				<p>Адрес: {user.address}</p>
				<p>Баланс: {user.balance} ETH</p>
			</Card.Body>
		</Card>
	);
}

export default ProfilePage;
