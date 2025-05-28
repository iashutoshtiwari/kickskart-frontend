import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./carousel.module.scss";

const Carousel = ({ settings, children }) => {
	return (
		<div className={styles["carousel-container"]}>
			<Slider {...settings}>{children}</Slider>
		</div>
	);
};

export default Carousel;
