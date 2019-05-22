import React, {PureComponent} from "react";
// CSS
import "./SearchBox.css";

class SearchBox extends PureComponent {
  render(){
    return (
      <div className="searchbox">
        <input type="text" placeholder="Search..." value=""/>
      </div>
    );
  }
}

export default SearchBox;
