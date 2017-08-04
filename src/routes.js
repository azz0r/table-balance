import React from "react"
import Page from "./components/page/page"
import { IndexRoute, Route } from "react-router"

const onChange = (previousRoute, nextRoute) => {
  // eslint-disable-next-line
  if (ga && nextRoute.location && nextRoute.location.pathname[0] !== "/") {
    // eslint-disable-next-line
    ga("send", "pageview", nextRoute.location.pathname)
  }
}

function errorLoading(err) {
  console.error("Dynamic page loading failed", err)
}

function loadRoute(cb) {
  return module => cb(null, module.default)
}

export default () => {
  return (
    <Route path="/" onChange={onChange} component={Page}>
      <IndexRoute
        getComponent={(location, cb) => {
          System.import("./pages/default")
            .then(loadRoute(cb))
            .catch(errorLoading)
        }}
      />
      <Route path="welcome">
        <IndexRoute
          getComponent={(location, cb) => {
            System.import("./pages/welcome")
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route
        path="*"
        getComponent={(location, cb) => {
          System.import("./pages/default")
            .then(loadRoute(cb))
            .catch(errorLoading)
        }}
      />
    </Route>
  )
}
