import React, { Children, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { navigate } from "@reach/router"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: theme.palette.grey[50],
    color: theme.palette.text.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function LinkTab({ href, ...props }) {
  return <Tab component={Link} to={href} {...props} />
}

export default function Layout({ children, location }) {
  const { pathname } = location
  const classes = useStyles()
  const labels = { Demographics: "/", "IMD Map": "/imdmap/" }
  const fixValue = s => (s.slice(-1) === "/" ? s : s + "/")
  const [value, setValue] = useState(fixValue(pathname))
  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
          <Tabs
            value={value}
            indicatorColor="primary"
            onChange={(e, v) => setValue(v)}
          >
            {Children.toArray(
              Object.keys(labels).map(k => (
                <LinkTab
                  label={k}
                  value={fixValue(labels[k])}
                  href={labels[k]}
                />
              ))
            )}
          </Tabs>
        </AppBar>
      </div>
      {children}
    </>
  )
}
