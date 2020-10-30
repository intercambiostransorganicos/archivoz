import React from "react";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import Lists from "./Lists";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Draw = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar}>Logo</div>
      <Divider />
      <Lists />
    </Drawer>
  );
};

export default Draw;
