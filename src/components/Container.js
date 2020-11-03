import React, { useState } from "react";
import clsx from "clsx";
import Navbar from "./Navbar";
import { BoxContent } from "./BoxContent";
import useStyles from "../hooks/useStyle";

const Container = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}   />

      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.toolbar}></div>
        <BoxContent className={classes.content} />
      </div>
    </div>
  );
};

export default Container;
