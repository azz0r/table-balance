import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
  },
  fullPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "2rem",
    fontFamily: "arial",
  },
})

const Page = ({ children, }) =>
  <main className={css(styles.fullPage, styles.background)}>
    {children}
  </main>

Page.displayName = "Page"

Page.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Page
