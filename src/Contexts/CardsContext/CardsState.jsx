import React, { useState } from "react";
import CardsContext from "./CardsContext";

const CardsState = (props) => {
  const s1 = [];

  const [state, setState] = useState(s1);

  const update = (x) => {
    setState(x);
  };

  return (
    <CardsContext.Provider value={{ state, update }}>
      {props.children}
    </CardsContext.Provider>
  );
};

export default CardsState;
