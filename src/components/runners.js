import React from "react"
import PropTypes from "prop-types"

import { StyleSheet, css } from "aphrodite"

import Runner from "./runner"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

const Runners = ({ runners, }) =>
  <div className={css(styles.container)}>
    {runners.map(runner => <Runner key={runner.id} {...runner} />)}
  </div>

Runners.propTypes = {
  runners: PropTypes.array.isRequired,
}

Runners.displayName = "Runners"

export default Runners
