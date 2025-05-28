import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Grid, IconButton } from "@mui/material";
import styles from "./index.module.scss";
import ProductTile from "../../components/home/product-tile/product-tile";
import { getProductList } from "@/redux/actions/home";
import Spinner from "@/components/common/spinner/spinner";
import HeroBanner from "@/components/home/hero-banner/hero-banner";
import Filter from "@/components/home/filter/filter";
import useBreakpoint from "@/utils/hooks/useBreakpoint";
import { GridViewOutlined, ViewAgendaOutlined } from "@mui/icons-material";
import { toggleMobileGrid } from "@/redux/actions/ui";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const breakpoint = useBreakpoint();

  const productList = useSelector((state) => state?.home?.list ?? []);
  const isLoading = useSelector((state) => state?.ui?.isLoading ?? false);
  const mobileGrid = useSelector((state) => state?.ui?.mobileGrid ?? false);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const onProductTileClick = (item) => {
    console.log("Home >>> onProductTileClick");
    if (item._id) {
      router.push({
        pathname: "/product-details/[pid]",
        query: { pid: item._id },
      });
    }
  };

  const onChangeViewClick = () => {
    dispatch(toggleMobileGrid(!mobileGrid));
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles["container"]}>
          {/* <div>
            <HeroBanner />
          </div> */}
          <div className={styles["product-filter-wrapper"]}>
            {/* <div className={styles["filter-container"]}>
              <Filter />
              {breakpoint === "xs" && (
                <IconButton onClick={onChangeViewClick}>
                  {mobileGrid ? <GridViewOutlined /> : <ViewAgendaOutlined />}
                </IconButton>
              )}
            </div> */}
            <div className={styles["product-container"]}>
              <Grid container spacing={1}>
                {productList.map((item, index) => (
                  <ProductTile
                    onClick={onProductTileClick}
                    key={index}
                    item={item}
                  />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
