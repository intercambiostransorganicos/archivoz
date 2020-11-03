import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import useStyles from '../hooks/useStyle'

export const BoxContent = () => {
    const classes = useStyles()
  return (
    <div>
      <Grid container >
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
