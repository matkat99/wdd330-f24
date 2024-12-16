import { useState } from "react";

import "./App.css";
import PlacesList from "./lib/PlacesList";
import IdentificationList from "./lib/IdentificationList";

function App() {
  const [placeId, setPlaceId] = useState<number>();

  // function handlePlaceClick(e: React.MouseEvent<HTMLButtonElement>) {
  //   const target = e.currentTarget;
  //   if (target.dataset.placeid) setPlaceId(parseInt(target.dataset.placeid));
  // }

  return (
    <>
      <h1>Nature</h1>
      <div className="card">
        <PlacesList onPlaceClick={setPlaceId} />
      </div>
      <div className="card">
        {placeId && <IdentificationList placeId={placeId} />}
      </div>
    </>
  );
}

export default App;
