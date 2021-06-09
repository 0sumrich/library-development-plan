import React from "react"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    position: "fixed",
    zIndex: 1,
  },
}))

export function ComboBox({ options, defaultValue, handleChange }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(defaultValue)
  return (
    <Paper className={classes.root}>
      <Autocomplete
        id="combo-box-demo"
        options={options}
        value={value}
        onChange={(e, v) => {
          handleChange(e, v)
          setValue(v)
        }}
        renderInput={params => (
          <TextField {...params} label="Library" variant="outlined" />
        )}
      />
    </Paper>
  )
}
