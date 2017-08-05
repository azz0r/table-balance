import React from "react"
import PropTypes from "prop-types"

import { StyleSheet, css } from "aphrodite"

import Table from "./table"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

const Tables = ({ tables, }) =>
  <div className={css(styles.container)}>
    {tables.map(table => <Table key={table.id} {...table} />)}
  </div>

Tables.propTypes = {
  tables: PropTypes.array.isRequired,
}

Tables.displayName = "Tables"

export default Tables
