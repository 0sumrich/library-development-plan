import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Loadable from "@loadable/component"
import classNames from "classnames"

const useStyles = makeStyles(theme => ({
  root: ({ height }) => ({
    width: "100%",
    maxWidth: 800,
    margin: `${theme.spacing(3)}px auto`,
    height: height ? height : "auto",
  }),
  plot: {
    width: "100%",
    height: "100%",
  },
}))

const LoadablePlot = Loadable(() => import("react-plotly.js"))

export function ChartWrapper({ data, layout, height }) {
  const props = { height }
  const classes = useStyles(props)
  const [chartData, setChartData] = useState(data)
  const [chartLayout, setChartLayout] = useState(layout)
  const [figure, setFigure] = useState({ data, layout })
  const [config, setConfig] = useState({
    scrollZoom: true,
    responsive: true,
  })
  return (
    <div className={classes.root}>
      <LoadablePlot
        className={classNames(classes.plot, "chart")}
        data={data}
        layout={layout}
        config={config}
        onInitialized={fig => {
          setFigure(fig)
        }}
        onUpdate={fig => {
          setFigure(fig)
        }}
      />
    </div>
  )
}
