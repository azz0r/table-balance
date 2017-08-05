import React from "react"
import { StyleSheet, css } from "aphrodite"

import Tables from "../components/tables"
import Runners from "../components/runners"
import ActiveRunners from "../components/active-runners"
import ActiveTables from "../components/active-tables"

const getRandomAmountOfDiners = (min = 1, max = 10) =>
  Math.round(Math.random() * (max - min) + min)

const tables = [
  { id: 1, active: true, amountOfDiners: getRandomAmountOfDiners(), },
  { id: 2, active: false, amountOfDiners: getRandomAmountOfDiners(), },
]
const runners = [{ id: 1, active: true, }, { id: 2, active: false, },]

const styles = StyleSheet.create({
  header: {
    color: "white",
  },
})

const WelcomePage = () =>
  <section>
    <h1 className={css(styles.header)}>Welcome to Table Balance</h1>
    <ActiveRunners runners={runners} />
    <ActiveTables tables={tables} />
    <Runners runners={runners} />
    <Tables tables={tables} />
  </section>

export default WelcomePage
