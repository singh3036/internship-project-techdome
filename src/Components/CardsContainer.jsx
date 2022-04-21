import React, { useContext } from "react";
import Card from "./Card";
import CardsContext from "../Contexts/CardsContext/CardsContext";

function CardsContainer() {
  const cards = useContext(CardsContext);

  return (
    <div className="container-fluid m-0 p-3 bg-color-gray d-flex flex-row flex-wrap">
      {cards.state.map((item, index) => (
        <Card
          missionIds={item.mission_id}
          launch_year={item.launch_year}
          success_launch={item.launch_success}
          land_success={item.rocket.first_stage.cores[0].land_success}
          patch={item.links.mission_patch}
          key={index}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
