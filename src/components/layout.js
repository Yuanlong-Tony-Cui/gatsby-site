import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import {
  container,
  heading,
  navBar,
  navLinks,
  navLinkTab,
  underscore,
  navLinkText,
  siteTitle,
  activeNavLink,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const location = useLocation();

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav className={navBar}>
        <ul className={navLinks}>
          <li className={navLinkTab}>
            <Link
              to="/"
              className={`${navLinkText} ${location.pathname === "/" ? activeNavLink : ""}`}
            > Home </Link>
            <div className={`${location.pathname === "/" ? underscore : ""}`}></div>
          </li>
          <li className={navLinkTab}>
            <Link
              to="/about"
              className={`${navLinkText} ${location.pathname === "/about/" ? activeNavLink : ""}`}
            > About </Link>
            <div className={`${location.pathname === "/about/" ? underscore : ""}`}></div>
          </li>
          <li className={navLinkTab}>
            <Link
              to="/career"
              className={`${navLinkText} ${location.pathname.startsWith("/career/") ? activeNavLink : ""}`}
            > Career </Link>
            <div className={`${location.pathname.startsWith("/career/") ? underscore : ""}`}></div>
          </li>
          <li className={navLinkTab}>
            <Link
              to="/studio"
              className={`${navLinkText} ${location.pathname.startsWith("/studio/") ? activeNavLink : ""}`}
            > Studio </Link>
            <div className={`${location.pathname.startsWith("/studio/") ? underscore : ""}`}></div>
          </li>
          <li className={navLinkTab}>
            <Link
              to="/library"
              className={`${navLinkText} ${location.pathname.startsWith("/library/") ? activeNavLink : ""}`}
            > Library </Link>
            <div className={`${location.pathname.startsWith("/library/") ? underscore : ""}`}></div>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
        <br/>
      </main>
    </div>
  )
}

export default Layout