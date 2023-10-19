import { NavLink } from "react-router-dom";
import { useAuth } from "hook/useAuth";
import { TbHexagonPlus, TbPhotoHexagon, TbShoppingBag } from "react-icons/tb";

import styles from "./AsideBar.module.css";

const MenuItems = [
	// { name: "Профиль", href: "/profile" },
	{ name: "Мои НФТ", img: <TbPhotoHexagon color="#a3a3a3" />, href: "/collection", roles: [] },
	{ name: "Создать НФТ", img: <TbHexagonPlus color="#a3a3a3" />, href: "/newNFT", roles: [2] }, // ограничение по роли
	{ name: "Маркет", img: <TbShoppingBag color="#a3a3a3" />, href: "/market", roles: [] },
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
					{MenuItems.map(({ name, img, href, roles }, index) => {
						if (roles.length && !roles.includes(Number(user.role))) return null;

						return (
							<li className={styles.navListElement} key={index}>
								<NavLink className={({ isActive }) => (isActive ? styles.navListElementActive : ``)} to={href}>
									{img}
									<span>{name}</span>
								</NavLink>
							</li>
						);
					})}
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
