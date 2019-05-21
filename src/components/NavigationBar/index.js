import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
// CSS
import "./NavigationBar.css";

class NavigationBar extends PureComponent {
  render(){
    return (
      <nav  className="navigationbar">
        <div>
          <div className="navigationbar-menu-item">
            <Link to="/">Home</Link>
          </div>
          <div className="navigationbar-menu-item">
            <Link to="/browse">Browse</Link>
          </div>
          <div className="navigationbar-menu-item">
            <Link to="/search">Search</Link>
          </div>
        </div>
        <div>
          <h1>Project Constituents</h1>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
