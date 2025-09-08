import "./LayoutDefault.scss";
import {  Link } from "react-router-dom";

function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">Logo</div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </header>
        <main className="layout-default__main">
          Nội dung chính...
        </main>
        <footer className="layout-default__footer">
          Copyright @ 2023 by 28Tech
        </footer>
      </div>
    </>
  )
}

export default LayoutDefault;