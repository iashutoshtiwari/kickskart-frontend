import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Bag from "../../assets/bag.svg";
import Menu from "../../assets/menu.svg";
import Profile from "../../assets/profile.svg";
import styles from "./header.module.scss";
import useBreakpoint from "../../utils/hooks/useBreakpoint";
import Button from "../common/button/button";
import LoginModal from "../login-modal/login-modal";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal, setMenuDrawer } from "@/redux/actions/ui";
import Drawer from "../common/drawer/drawer";

const Header = () => {
  //Initialize Hooks
  const router = useRouter();
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch();

  const [hideCartIcon, setHideCartIcon] = useState(true);

  useEffect(() => {
    if (router?.isReady && router?.pathname === "/cart") {
      setHideCartIcon(true);
    } else {
      setHideCartIcon(false);
    }
  }, [router]);

  useEffect(() => {
    if (breakpoint !== "xs" || breakpoint !== "sm") {
      dispatch(setMenuDrawer(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint]);

  const openMenuDrawer = useSelector((state) => state?.ui?.openMenuDrawer);

  const onLogoClick = () => {
    console.log("Header >>> onLogoClick");
    router.push("/home");
  };

  const onCartIconClick = () => {
    console.log("Header >>> onCartIconClick");
    router.push("/cart");
  };

  const onMenuIconClick = () => {
    console.log("Header >>> onMenuIconClick");
    dispatch(setMenuDrawer(true));
  };

  const onLoginClick = () => {
    console.log("Header >>> onProfileIconClick");
    dispatch(setLoginModal(true));
    dispatch(setMenuDrawer(false));
  };

  const onDrawerClose = () => {
    dispatch(setMenuDrawer(false));
  };

  return (
    <>
      <header className={styles.container}>
        <h1 onClick={onLogoClick}>Sneaker Store.</h1>
        <div className={styles.actions}>
          {!hideCartIcon && (
            <Bag
              onClick={onCartIconClick}
              className={styles.icon}
              style={{ fontSize: "24px", padding: "8px", marginRight: "8px" }}
            />
          )}
          {breakpoint === "xs" || breakpoint === "sm" ? (
            <Menu
              onClick={onMenuIconClick}
              className={styles.icon}
              style={{ fontSize: "24px", padding: "8px", marginRight: "8px" }}
            />
          ) : (
            <Profile
              onClick={onLoginClick}
              className={styles.icon}
              style={{ fontSize: "24px", padding: "8px", marginRight: "8px" }}
            />
          )}
        </div>
        <Drawer open={openMenuDrawer} onClose={onDrawerClose} anchor="right">
          <div className={styles["drawer-container"]}>
            <Button
              onClick={onLoginClick}
              width={150}
              height={40}
              buttonLabel="Sign In"
            />
          </div>
        </Drawer>
      </header>
      <LoginModal />
    </>
  );
};

export default Header;
