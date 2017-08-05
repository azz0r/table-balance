import React from "react"
import PropTypes from "prop-types"

import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  container: {
    padding: ".1rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
  item: {
    padding: ".2rem",
  },
})

const ActiveRunners = ({ runners, }) => {
  const activeRunners = runners.filter(runner => runner.active).length
  const inActiveRunners = runners.length - activeRunners
  return (
    <span className={css(styles.container)}>
      <h3>Runners</h3>
      <p className={css(styles.item)}>
        Active: {activeRunners}
      </p>
      <p className={css(styles.item)}>
        Inactive: {inActiveRunners}
      </p>
    </span>
  )
}

ActiveRunners.propTypes = {
  runners: PropTypes.array.isRequired,
}

ActiveRunners.displayName = "ActiveRunners"

export default ActiveRunners
