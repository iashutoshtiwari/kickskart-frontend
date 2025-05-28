import React from "react";
import { useSelector } from "react-redux";
import styles from "../pdp.module.scss";

const ProductDescription = (props) => {
	const item = useSelector((state) => state?.pdp?.details);

	return (
		<div className={styles["product-description-container"]}>
			<div className={styles["product-description"]}>{item?.description}</div>
			<div>
				<ul>
					<li>Colour :{item?.color}</li>
					<li>Style :{item?.style}</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductDescription;
