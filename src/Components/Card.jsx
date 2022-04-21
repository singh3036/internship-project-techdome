import React from "react";

function Card(props) {
  const { missionIds, launch_year, success_launch, land_success, patch } =
    props;

  return (
    <div className="container my-2 p-2 bg-white" style={{ maxWidth: 300 }}>
      <div className="d-flex justify-content-center align-items-center bg-color-gray">
        <img
          src={patch}
          alt="patch"
          className="img-fluid"
          style={{ maxHeight: 250 }}
        />
      </div>
      <div className="p-2">
        <div>
          <span className="fw-bold">Mission Ids:</span>
          <ul>
            {missionIds.length === 0 ? "No Mission Ids present" : <></>}
            {missionIds.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="fw-bold">Launch Year: </span>
          <span>{launch_year}</span>
        </div>
        <div>
          <span className="fw-bold">Successful Launch: </span>
          <span>{`${success_launch ? "True" : "False"}`}</span>
        </div>
        <div>
          <span className="fw-bold">Successful Landing: </span>
          <span>{`${land_success ? "True" : "False"}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
