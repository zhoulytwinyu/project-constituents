import React from "react";

function Search(props) {
  return (
    <section className="container">
      <div className="input-group input-group-lg">
        <input  className="form-control"
                type="text" placeholder="Search..."/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Search;