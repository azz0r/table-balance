import React from "react"

import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
  },
  fullTable: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
})

const Table = ({ children, }) =>
  <main className={css(styles.fullTable, styles.background)}>
    {children}
  </main>

Table.displayName = "Table"

export default Table
