import React from 'react'
import { withWidth, Typography, Hidden, Button } from '@material-ui/core'

const Ocult = (props) => {
    return (
        <div>
            <Typography variant="h4" color="initial">
                Ancho: {props.width}
            </Typography>

            <Hidden mdUp>
                <Button variant="contained" color="secondary">
                  xs
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Ocult)