import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
// CSS
import "./NavigationBar.css";

class NavigationBar extends PureComponent {
  render(){
    return (
      <div className="container">
        <div className="row align-items-end justify-content-between">
          <div className="col-md-auto order-lg-1 order-2">
            <nav className="navigationbar">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/browse">Browse</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search">Search</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/calculate">Calculate</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-auto order-lg-2 order-1">
            <h1 className="display-4">Project Constituents</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
