import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(2)}px auto`,
  },
  cardHelper: {
    padding: theme.spacing(3),
  },
}))

export function ContentWrapper({ data, layout, children }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardHelper}>{children}</CardContent>
    </Card>
  )
}
