import React from "react"
import PropTypes from "prop-types"

import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  size: {
    height: "10rem",
    width: "35rem",
    margin: "1rem",
  },
  active: {
    backgroundColor: "brown",
  },
  inactive: {
    backgroundColor: "saddleBrown",
  },
})

const text = {
  inactive: "Empty table",
}

const Table = ({ amountOfDiners = 0, }) => {
  const active = Boolean(amountOfDiners > 0)
  return (
    <div className={css(active ? styles.active : styles.inactive, styles.size)}>
      {active ? `${amountOfDiners} diners` : text.inactive}
    </div>
  )
}

Table.propTypes = {
  amountOfDiners: PropTypes.number.isRequired,
}

Table.displayName = "Table"

export default Table
