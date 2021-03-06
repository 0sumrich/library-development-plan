import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  },
}))

export function Title({ children }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h4">{children}</Typography>
    </div>
  )
}
