import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
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
      <nav>
        <ul className={navLinks}>
          <li className={`${location.pathname === "/" ? navLinkItem : ""}`}>
            <Link
              to="/"
              className={`${navLinkText} ${location.pathname === "/" ? activeNavLink : ""}`}
            >
              Home
            </Link>
          </li>
          <li className={`${location.pathname === "/about/" ? navLinkItem : ""}`}>
            <Link
              to="/about"
              className={`${navLinkText} ${location.pathname === "/about/" ? activeNavLink : ""}`}
            >
              About
            </Link>
          </li>
          <li className={`${location.pathname.startsWith("/career/") ? navLinkItem : ""}`}>
            <Link
              to="/career"
              className={`${navLinkText} ${location.pathname.startsWith("/career/") ? activeNavLink : ""}`}
            >
            {/* `.startsWith("/career")` ensures that subpages (e.g. /career/post-1) are also highlighted  */}
              Career
            </Link>
          </li>
          <li className={`${location.pathname.startsWith("/library/") ? navLinkItem : ""}`}>
            <Link
              to="/library"
              className={`${navLinkText} ${location.pathname.startsWith("/library/") ? activeNavLink : ""}`}
            >
              Library
            </Link>
          </li>
          <li className={`${location.pathname.startsWith("/studio/") ? navLinkItem : ""}`}>
            <Link
              to="/studio"
              className={`${navLinkText} ${location.pathname.startsWith("/studio/") ? activeNavLink : ""}`}
            >
              Studio
            </Link>
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