import React from 'react'
import Iframe from "react-iframe"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: '100vh',
        marginTop: theme.spacing(4)
    },
}))

export default function ImdMap({ location }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Iframe
                url="https://0sumrich.github.io/libs-imd-map/"
                width="100%"
                height="100%"
            />
        </div>
    )
}
