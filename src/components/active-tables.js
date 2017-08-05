import React from "react"
import PropTypes from "prop-types"

import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  container: {
    padding: ".1rem",
    color: "white",
  },
})

const ActiveTables = ({ tables, }) => {
  const activeTables = tables.filter(runner => runner.active).length
  const inActiveTables = tables.length - activeTables
  return (
    <span className={css(styles.container)}>
      <h3>Tables</h3>
      <p>
        Active: {activeTables}
      </p>
      <p>
        Inactive: {inActiveTables}
      </p>
    </span>
  )
}

ActiveTables.propTypes = {
  tables: PropTypes.array.isRequired,
}

ActiveTables.displayName = "ActiveTables"

export default ActiveTables
