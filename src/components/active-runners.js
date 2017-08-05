import React from "react"
import PropTypes from "prop-types"

import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  container: {
    padding: "1rem",
    color: "white",
  },
})

const ActiveRunners = ({ runners, }) => {
  const activeRunners = runners.filter(runner => runner.active).length
  const inActiveRunners = runners.length - activeRunners
  return (
    <span className={css(styles.container)}>
      <h3>Runners</h3>
      <p>
        Active: {activeRunners}
      </p>
      <p>
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
