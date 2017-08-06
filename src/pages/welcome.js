import React from "react"
import { StyleSheet, css } from "aphrodite"

import Tables from "../components/tables"
import Runners from "../components/runners"
import ActiveRunners from "../components/active-runners"
import ActiveTables from "../components/active-tables"
import Timer from "../components/timer"

const MIN_DINERS = 0
const MAX_DINERS = 8

const getRandomInt = (min = 0, max = 25) =>
  Math.round(Math.random() * (max - min) + min)
const getRandomBool = (min = 0, max = 2) =>
  Math.round(Math.random() * (max - min) + min) % 2

const tables = [
  { id: 1, amountOfDiners: getRandomInt(MIN_DINERS, MAX_DINERS), },
  { id: 2, amountOfDiners: getRandomInt(MIN_DINERS, MAX_DINERS), },
  { id: 3, amountOfDiners: getRandomInt(MIN_DINERS, MAX_DINERS), },
  { id: 4, amountOfDiners: getRandomInt(MIN_DINERS, MAX_DINERS), },
  { id: 5, amountOfDiners: getRandomInt(MIN_DINERS, MAX_DINERS), },
  { id: 6, amountOfDiners: getRandomInt(MIN_DINERS, MAX_DINERS), },
  { id: 7, amountOfDiners: getRandomInt(MIN_DINERS, MAX_DINERS), },
  { id: 8, amountOfDiners: getRandomInt(MIN_DINERS, MAX_DINERS), },
]
const runners = [
  { id: 1, active: getRandomBool(), },
  { id: 2, active: getRandomBool(), },
  { id: 3, active: getRandomBool(), },
  { id: 4, active: getRandomBool(), },
  { id: 5, active: getRandomBool(), },
  { id: 6, active: getRandomBool(), },
  { id: 7, active: getRandomBool(), },
  { id: 8, active: getRandomBool(), },
]

const styles = StyleSheet.create({
  header: {
    color: "white",
    textAlign: "center",
    fontSize: "3rem",
    margin: "0 0 1rem 0",
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
