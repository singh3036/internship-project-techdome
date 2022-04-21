import React, { useState, useEffect, useContext } from "react";
import { ToggleButton } from "react-bootstrap";
import CardsContext from "../Contexts/CardsContext/CardsContext";

const years = [];

for (let i = 2006; i <= 2020; i++) {
  years.push(i);
}

function Filter() {
  const cards = useContext(CardsContext);

  const [filterVal, setFilterVal] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");
  const [landSuccess, setLandSuccess] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${filterVal}`
    );
    const data = await res.json();

    cards.update(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [filterVal, launchSuccess, landSuccess]);

  return (
    <div className="bg-white">
      <div>
        <h2>Filters</h2>
      </div>
      <div className="d-flex flex-column mx-auto justify-content-center">
        <div className="my-2 mx-auto">
          <h5 className="text-underline text-center">Launch Year</h5>
          <div className="my-1 row col-12 justify-content-around">
            {years.map((item, index) => (
              <div
                key={index}
                className="col-6 d-flex justify-content-center align-items-center"
              >
                <ToggleButton
                  value={item}
                  className="btn-sm my-1 btn-light btn-filter"
                  checked={filterVal === item}
                  onClick={(e) => {
                    setLandSuccess("");
                    setLaunchSuccess("");
                    setFilterVal(item);
                  }}
                >
                  {item}
                </ToggleButton>
              </div>
            ))}
          </div>
        </div>
        <div className="my-2 mx-auto col-12">
          <h5 className="text-center">Successful Launch</h5>
          <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <ToggleButton
                value={true}
                className="btn-sm btn-light btn-filter"
                checked={launchSuccess === true}
                onClick={(e) => {
                  setLandSuccess("");
                  setFilterVal("");
                  setLaunchSuccess(true);
                }}
              >
                True
              </ToggleButton>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <ToggleButton
                value={false}
                className="btn-sm btn-light btn-filter"
                checked={launchSuccess === false}
                onClick={(e) => {
                  setLandSuccess("");
                  setFilterVal("");
                  setLaunchSuccess(false);
                }}
              >
                False
              </ToggleButton>
            </div>
          </div>
        </div>
        <div className="my-2 mx-auto col-12">
          <h5 className="text-center">Successful Landing</h5>
          <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <ToggleButton
                value={true}
                className="btn-sm btn-light btn-filter"
                checked={landSuccess === true}
                onClick={(e) => {
                  setLaunchSuccess("");
                  setFilterVal("");
                  setLandSuccess(true);
                }}
              >
                True
              </ToggleButton>
            </div>

            <div className="col-6 d-flex justify-content-center align-items-center">
              <ToggleButton
                value={false}
                className="btn-sm btn-light btn-filter"
                checked={landSuccess === false}
                onClick={(e) => {
                  setLaunchSuccess("");
                  setFilterVal("");
                  setLandSuccess(false);
                }}
              >
                False
              </ToggleButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
