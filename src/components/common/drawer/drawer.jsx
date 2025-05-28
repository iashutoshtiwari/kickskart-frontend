import React from "react";
import PropTypes from "prop-types";
import { Drawer as MuiDrawer } from "@mui/material";
import styles from "./drawer.module.scss";

const Drawer = (props) => {
  const { anchor, children, open, onClose } = props;

  return (
    <MuiDrawer anchor={anchor} open={open} onClose={onClose}>
      <div
        className={
          styles[
            anchor === "bottom"
              ? "drawer-container-bottom"
              : "drawer-container-right"
          ]
        }
      >
        {children}
      </div>
    </MuiDrawer>
  );
};

export default Drawer;
