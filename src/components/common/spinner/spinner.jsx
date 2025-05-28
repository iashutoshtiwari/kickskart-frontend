import { CircularProgress } from "@mui/material";
import styles from "./spinner.module.scss";

const Spinner = () => {
	return (
		<div className={styles["spinner-container"]}>
			<CircularProgress sx={{ color: "#000000" }} />
		</div>
	);
};

export default Spinner;
