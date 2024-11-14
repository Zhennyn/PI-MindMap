import styles from "./styles/Page.module.css";

export const Page = () => {
	return (
		<div className={styles.page1}>
			<div className={styles.map}>Map</div>
			<img className={styles.mindset1Icon} alt="" src="assets\mindset.png" />
			<div className={styles.mind}>Mind</div>
		</div>);
};
