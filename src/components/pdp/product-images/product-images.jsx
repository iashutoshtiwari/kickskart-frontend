import Carousel from "@/components/common/carousel/carousel";
import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "../pdp.module.scss";
import useBreakpoint from "@/utils/hooks/useBreakpoint";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const ProductImages = () => {
  const item = useSelector((state) => state?.pdp?.details);

  const breakpoint = useBreakpoint();

  //Carousel settings
  const settings = {
    dots: false,
    arrows: breakpoint !== "xs" && breakpoint !== "sm" ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles["product-images-container"]}>
      <Carousel settings={settings}>
        {item.images &&
          item.images.map((image) => {
            return breakpoint === "xs" || breakpoint === "sm" ? (
              <TransformWrapper key={item?.id} panning={{ disabled: true }}>
                <TransformComponent>
                  <div className={styles["next-image-wrapper"]}>
                    <Image
                      sizes="100vw"
                      fill
                      style={{ objectFit: "contain" }}
                      alt={item?.name}
                      src={image}
                      priority
                      unoptimized
                    />
                  </div>
                </TransformComponent>
              </TransformWrapper>
            ) : (
              <div className={styles["next-image-wrapper"]}>
                <Image
                  sizes="100vw"
                  fill
                  style={{ objectFit: "contain" }}
                  alt={item?.name}
                  src={image}
                  priority
                  unoptimized
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default ProductImages;
