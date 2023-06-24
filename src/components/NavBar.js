import React, { Component } from "react";
import India from "./India";
import {Link} from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <India/>
          <Link className="navbar-brand" to="/">
            DISCUSSION
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  General <span className="sr-only">(current)</span>
                </Link>
              </li>
              
              <li className="nav-item active">
                <Link className="nav-link" to="/business">
                  Business <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/entertainment">
                  Entertainment <span className="sr-only">(current)</span>
                </Link>
              </li>
              
              <li className="nav-item active">
                <Link className="nav-link" to="/health">
                  Health <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/science">
                  Science <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/sports">
                  Sports <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/technology">
                  Technology <span className="sr-only">(current)</span>
                </Link>
              </li>
              
            </ul>
            
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
