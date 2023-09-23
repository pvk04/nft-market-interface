import React from "react";
import styles from "./ErrorPage.module.css";

interface IProps {
	errorCode?: number;
	errorMessage: string;
}

function ErrorPage({ errorCode, errorMessage }: IProps): JSX.Element {
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<h1 className={styles.errorText} style={{ fontSize: "180px" }}>
				{errorCode}
			</h1>
			<p className={styles.errorText}>{errorMessage}</p>
		</div>
	);
}

export default ErrorPage;
