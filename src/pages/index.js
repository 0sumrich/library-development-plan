import React, { useState, Children } from "react"
import Container from "@material-ui/core/Container"
import demographics from "../data/demographics.json"
import uDemographics from "../data/universal-demographics.json"
import { ComboBox } from "../components/ComboBox"
import { ChartWrapper } from "../components/chartWrapper"
import { Section } from "../components/Section"

export default function IndexPage({ location }) {
  const libs = Object.keys(demographics)
  const [lib, setLib] = useState("Chipping Barnet")
  const [height, setHeight] = useState(null)
  const chart = ({ layout, data }) => (
    <ChartWrapper layout={layout} data={data} height={height} />
  )
  const libraryChart = key => chart(demographics[lib][key])
  const universalChart = key => chart(uDemographics[key])
  const sections = {
    Ages: [libraryChart("ages"), libraryChart("ages_pct")],
    Ethnicities: [
      universalChart("lbb_ethnicities"),
      libraryChart("ethnicities"),
    ],
    Religion: [universalChart("lbb_religion"), libraryChart("religion")],
    "Borrower locations": [
      universalChart("distances"),
      libraryChart("locations"),
    ],
  }
  return (
    <Container style={{ marginTop: "4rem" }}>
      <ComboBox
        options={libs}
        defaultValue={lib}
        handleChange={(event, value) => {
          if (libs.includes(value)) {
            // you need to set the height of the chartwrapper on change, otherwise it disappears behind a 0 height paper component
            setHeight(
              document.querySelector(".chart").getBoundingClientRect().height
            )
            setLib(value)
          }
        }}
      />
      {Children.toArray(
        Object.keys(sections).map(key => (
          <Section title={key} charts={sections[key]} />
        ))
      )}
    </Container>
  )
}
