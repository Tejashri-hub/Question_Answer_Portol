import React from "react";
import Div from "./Div";
import Data from "./Data";
import "./styles.css";
import Appone from "./Appone";

function ndiv(val) {
  return (
    <>
      <Div
        paraone={val.paraone}
        pone={val.pone}
        paratwo={val.paratwo}
        parathree={val.parathree}
      />
    </>
  );
}

function Appo() {
  return (
    <>
      <div className="main_component">
        <div>
          <Appone />
        </div>
        <div>{Data.map(ndiv)}</div>
      </div>
    </>
  );
}

export default Appo;
