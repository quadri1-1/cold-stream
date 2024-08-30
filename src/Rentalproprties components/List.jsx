import React from "react";
import "../styles/list.css";
import { Link } from "react-router-dom";

import Appt1i from "./Appt1i";
import Appt12i from "./Appt12i";
import Appt3 from "./Appt3";
import Appt4 from "./Appt4";
import Appt5 from "./Appt5";
import Appt6 from "./Appt6";
import Appt7 from "./Appt7";
import Appt9 from "./Appt9";
import Appt10 from "./Appt10";

const List = () => {
  return (
    <div>
      <div>
        <h1>Listing ofAvailable rental Properties</h1>
      </div>
      <Appt1i />
      <Appt12i />
      <Appt3 />
      <Appt4 />
      <Appt5 />
      <Appt6 />
      <Appt7 />
      <Appt9 />
      <Appt10/>

    </div>
  );
};

export default List;
