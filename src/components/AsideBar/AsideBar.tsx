import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AsideBar.module.css";

const MenuItems = [
	{ name: "Профиль", href: "/profile"},
	{ name: "Мои нфт", href: "/collection" },
	{ name: "Маркет", href: "/market" },
];

function AsideBar() {
	return (
		<aside className={styles.aside}>
			<div className={styles.logo}>
				{/* <img alt="logo" /> */}
				<h1>NFT MARKET</h1>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{MenuItems.map(({ name, href }, index) => (
						<li className={styles.navListElement} key={index}>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.navListElementActive : ``
								}
								to={href}
							>
								{/* <img src={icon} alt="" /> */}
								<span>{name}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<button className={styles.logout}>
				<img src="/assets/images/logout.svg" alt="" />
				<span>Выход</span>
			</button>
		</aside>
	);
}

export default AsideBar;