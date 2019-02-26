import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    const header = (
      <div className="split page-head__section">
        <div className="split__title">
          <h1 className="page-head__blog-name milli">
            <Link to={`/`}>Tim Whitacre's Notes</Link>
          </h1>
        </div>
      </div>
    )

    const footer = (
      <div className="wrapper wrapper--wide split split--responsive">
        <div className="split__title">
          © 2019 •<a href="https://timw.co">Tim Whitacre</a> •&nbsp;
          <a href="https://github.com/twhitacre/notes">Source Code</a>
        </div>
      </div>
    )

    return (
      <React.Fragment>
        <header className="page-head wrapper">{header}</header>
        <main className="wrapper">{children}</main>
        <footer className="footer">{footer}</footer>
      </React.Fragment>
    )
  }
}

export default Layout
