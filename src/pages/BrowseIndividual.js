import React from "react";

function BrowseIndividual(props){
  return (
    <div class="container">
      <p>{JSON.stringify(props)}</p>
      <input type="file" accept="image/*"/>
    </div>
  );
}

export default BrowseIndividual;