import React from "react";
import { NavLink,withRouter } from "react-router-dom";

function Appone() {
  return (
    <>
      <div className="box">
        <p className="History">
          <NavLink exact to="">History</NavLink>
          <p className="zero">View the questions you viewed before</p>
        </p>
      </div>
      <div className="boxone">
        <p className="sign">
            <NavLink exact to="/signup">Sign up</NavLink>
          <p className="zeroone"> Sign up to post,answer and much more</p>
        </p>
      </div>
    </>
  );
};

export default withRouter(Appone);


