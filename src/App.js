import CardsContainer from "./Components/CardsContainer";
import Filter from "./Components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import CardsState from "./Contexts/CardsContext/CardsState";

function App() {
  return (
    <CardsState>
      <div className="col-12 bg-color-gray">
        <h1>SpaceX Launch Programs</h1>
        <div className="col-12 container-fluid p-0 m-0 row">
          <div className="col-md-2 p-0">
            <Filter />
          </div>
          <div className="col-md-9 p-0">
            <CardsContainer />
          </div>
        </div>
      </div>
    </CardsState>
  );
}

export default App;
