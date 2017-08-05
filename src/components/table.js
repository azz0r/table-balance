import React from "react"
import PropTypes from "prop-types"

import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  size: {
    height: "10rem",
    width: "35rem",
  },
  active: {
    backgroundColor: "brown",
  },
  inactive: {
    backgroundColor: "saddleBrown",
  },
})

const Table = ({ active = false, }) =>
  <div className={css(active ? styles.active : styles.inactive, styles.size)} />

Table.propTypes = {
  active: PropTypes.bool.isRequired,
}

Table.displayName = "Table"

export default Table
