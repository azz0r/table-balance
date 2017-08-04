import React from "react"
import PropTypes from "prop-types"

const Page = ({ children, }) =>
  <main id="page-container" className="page-container no-select">
    {children}
  </main>

Page.displayName = "Page"

Page.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Page
