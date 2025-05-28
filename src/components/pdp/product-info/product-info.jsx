import React from "react";
import styles from "../pdp.module.scss";
import { useSelector } from "react-redux";
import { formatCurrency } from "@/utils/utility";

const ProductInfo = (props) => {
	const item = useSelector((state) => state?.pdp?.details);
	const formattedPrice = formatCurrency(item?.price);
	return (
		<div className={styles["product-info-container"]}>
			<h1>{item?.name}</h1>
			<h3>{item?.category}</h3>
			<div>MRP: {formattedPrice}</div>
			<div>
				<p>incl. of taxes</p>
			</div>
		</div>
	);
};

export default ProductInfo;
