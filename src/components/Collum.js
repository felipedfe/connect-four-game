import React from "react";

function Collum(props) {
  let{ index } = props;
  console.log(props);

  const collumIndex = index;
  let rowIndex = 0;

  return <div className={`collum-${index}`} >
    <button>insert</button>
    <div id={`row${rowIndex++}-collum${collumIndex}`} className="row"></div>
    <div id={`row${rowIndex++}-collum${collumIndex}`} className="row"></div>
    <div id={`row${rowIndex++}-collum${collumIndex}`} className="row"></div>
    <div id={`row${rowIndex++}-collum${collumIndex}`} className="row"></div>
    <div id={`row${rowIndex++}-collum${collumIndex}`} className="row"></div>
    <div id={`row${rowIndex++}-collum${collumIndex}`} className="row"></div>
  </div>
}

export default Collum;
