import React from "react"
import { Link } from "react-router"

const WelcomePage = () =>
  <section>
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
