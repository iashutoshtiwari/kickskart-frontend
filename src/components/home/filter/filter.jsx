import { useState } from "react";
import Button from "@/components/common/button/button";
import Drawer from "@/components/common/drawer/drawer";
import useBreakpoint from "@/utils/hooks/useBreakpoint";
import styles from "./filter.module.scss";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Filter = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const breakpoint = useBreakpoint();

  const onFilterButtonClick = () => {
    setToggleDrawer(!toggleDrawer);
  };

  const getFilterComponent = () => {
    return (
      <div className={styles["sortby-filter"]}>
        <div className={styles["sortby"]}>
          <FormControl>
            <FormLabel>Sort By</FormLabel>
            <RadioGroup defaultValue="newest" name="radio-buttons-group">
              <FormControlLabel
                value="newest"
                control={<Radio />}
                label="Newest"
              />
              <FormControlLabel
                value="high-low"
                control={<Radio />}
                label="Price: High to Low"
              />
              <FormControlLabel
                value="low-high"
                control={<Radio />}
                label="Price: Low to High"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={styles["filter"]}>
          <FormControl>
            <FormLabel>Filter by Price</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Under ₹10,000"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="₹10,000 - ₹20,000"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="₹20,000 and above"
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
    );
  };

  return breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md" ? (
    <>
      <Button
        width={110}
        height={35}
        buttonLabel="Filter"
        variant="light"
        onClick={onFilterButtonClick}
      />
      <Drawer
        anchor={"bottom"}
        open={toggleDrawer}
        onClose={onFilterButtonClick}
      >
        {getFilterComponent()}
      </Drawer>
    </>
  ) : (
    getFilterComponent()
  );
};

export default Filter;
