import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProductDetails } from "@/redux/actions/pdp";
import ProductInfo from "@/components/pdp/product-info/product-info";
import ProductImages from "@/components/pdp/product-images/product-images";
import ProductDescription from "@/components/pdp/product-description/product-description";
import Spinner from "@/components/common/spinner/spinner";
import useBreakpoint from "@/utils/hooks/useBreakpoint";
import styles from "../index.module.scss";
import Button from "@/components/common/button/button";

const ProductDetails = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const breakpoint = useBreakpoint();

	const isLoading = useSelector((state) => state?.ui?.isLoading ?? false);

	useEffect(() => {
		if (router?.query?.pid) {
			dispatch(getProductDetails(router?.query?.pid));
		}
	}, [dispatch, router?.query?.pid]);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className={styles["pdp-container"]}>
					{(breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl" || breakpoint === "xxl") && (
						<div className={styles["image-wrapper"]}>
							<ProductImages />
						</div>
					)}
					<div>
						<ProductInfo />
						{(breakpoint === "xs" || breakpoint === "sm") && (
							<div className={styles["image-wrapper"]}>
								<ProductImages />
							</div>
						)}
						<ProductDescription />
						<div className={styles["button-wrapper"]}>
							<Button buttonLabel="Add to Cart" height={62} width={342} onClick={() => {}} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductDetails;
