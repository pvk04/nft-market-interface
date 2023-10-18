import { NavLink } from "react-router-dom";
import { useAuth } from "hook/useAuth";
import { RiNftLine } from "react-icons/ri";
import { LiaShoppingBagSolid } from "react-icons/lia";

import styles from "./AsideBar.module.css";

const MenuItems = [
	// { name: "Профиль", href: "/profile" },
	{ name: "Мои нфт", img: <RiNftLine color="#a3a3a3" />, href: "/collection" },
	{ name: "Маркет", img: <LiaShoppingBagSolid color="#a3a3a3" />, href: "/market" },
];

function AsideBar() {
	const { user } = useAuth();

	return (
		<aside className={styles.aside}>
			<div className={styles.logo}>
				{/* <img alt="logo" /> */}
				<h1>NFT MARKET</h1>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navListElement + " " + styles.navListProfile}>
						<NavLink
							className={({ isActive }) => (isActive ? styles.navListElementActive : ``)}
							style={{ alignItems: "center" }}
							to={"profile"}
						>
							<img src="/images/profilePicture.jpg" alt="" style={{ borderRadius: "50%" }} />
							<div style={{ display: "flex", flexDirection: "column" }}>
								<span className={styles.login}>{user.login}</span>
								<span>{user.balance} Profi</span>
							</div>
						</NavLink>
					</li>
					{MenuItems.map(({ name, img, href }, index) => (
						<li className={styles.navListElement} key={index}>
							<NavLink className={({ isActive }) => (isActive ? styles.navListElementActive : ``)} to={href}>
								{img}
								<span>{name}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<button className={styles.logout}>
				<img src="/images/logout.svg" alt="" />
				<span>Выход</span>
			</button>
		</aside>
	);
}

export default AsideBar;
