import React from "react"
import PropTypes from "prop-types"

import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  size: {
    height: "5rem",
    width: "5rem",
  },
  active: {
    backgroundColor: "white",
  },
  inactive: {
    backgroundColor: "gray",
  },
})

const Runner = ({ active = false, }) =>
  <div className={css(active ? styles.active : styles.inactive, styles.size)} />

Runner.propTypes = {
  active: PropTypes.bool.isRequired,
}

Runner.displayName = "Runner"

export default Runner
