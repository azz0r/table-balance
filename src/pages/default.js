import React, { Component } from "react"
import PropTypes from "prop-types"

class DefaultPage extends Component {
  componentWillMount() {
    let pathName = "welcome"

    const { router, } = this.props

    router.push(pathName)
  }

  render() {
    return null
  }
}

DefaultPage.displayName = "DefaultPage"

DefaultPage.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default DefaultPage
