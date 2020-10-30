import React, {useState} from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import Draw from "./Draw";
import { BoxContent } from "./BoxContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Container = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const actionOpen = () =>{
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <Navbar actionOpen={actionOpen} />
      <Hidden xsDown>
        <Draw variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Draw variant="temporary" open={open} onClose={actionOpen} />
      </Hidden>

      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <BoxContent />
      </div>
    </div>
  );
};

export default Container;
