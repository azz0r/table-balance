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

const ActiveTables = ({ tables, }) => {
  const activeTables = tables.filter(runner => runner.amountOfDiners > 0).length
  const inActiveTables = tables.length - activeTables
  return (
    <span className={css(styles.container)}>
      <h3>Tables:</h3>
      <p className={css(styles.item)}>
        Active: {activeTables}
      </p>
      <p className={css(styles.item)}>
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
