import React from "react"
import { Link } from "react-router"
import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  red: {
    backgroundColor: "red",
  },
  blue: {
    backgroundColor: "blue",
  },
  hover: {
    ":hover": {
      backgroundColor: "red",
    },
  },
  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red",
    },
  },
})

const WelcomePage = () =>
  <section className={css(styles.hover, styles.blue)}>
    <h1>Welcome to Table Balance</h1>
    <div className="row">
      <div className="col-xs-12 highlight pulse">
        <div className="box">
          <Link>Settings / Start Game</Link>
        </div>
      </div>
    </div>
  </section>

export default WelcomePage
