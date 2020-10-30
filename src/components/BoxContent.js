import React from "react";
import { Box, Grid, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export const BoxContent = () => {
    const classes = useStyle()
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box border={2}>
            <Button variant="contained" className={classes.btn}>
              B
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box border={2}>Content</Box>
        </Grid>
      </Grid>
    </div>
  );
};
