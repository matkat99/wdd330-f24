import { useState } from "react";
import Searchbar from "./SearchBar";

interface Geometry {
  type: string; // e.g., "Polygon"
  coordinates: number[][][]; // Array of coordinates for the polygon
}

interface Place {
  id: number; // e.g., 13480
  uuid: string; // e.g., "4f4eba49-0e86-4269-a506-7c5e27335417"
  slug: string; // e.g., "yellow-medicine-county"
  name: string; // e.g., "Yellow Medicine"
  display_name: string; // e.g., "Yellow Medicine County, US, MN"
  place_type: number; // e.g., 9
  admin_level: number; // e.g., 20
  bbox_area: number; // e.g., 0.430603414584
  ancestor_place_ids: number[]; // e.g., [97394, 1, 38, 13480]
  geometry_geojson: Geometry; // Geometry object for the place
  bounding_box_geojson: Geometry; // Bounding box geometry object
  location: string; // e.g., "44.7162494611,-95.8683595611"
}
type PlaceListProps = {
  //   handlePlaceClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPlaceClick: React.Dispatch<React.SetStateAction<number | undefined>>;
};
export default function PlacesList({ onPlaceClick }: PlaceListProps) {
  const [places, setPlaces] = useState<Place[]>([]);

  async function searchHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query");
    const res = await fetch(
      `https://api.inaturalist.org/v1/places/autocomplete?q=${query}`
    );
    if (!res.ok) throw new Error(await res.json());
    const data = await res.json();
    setPlaces(data.results);
  }

  return (
    <>
      <Searchbar label="Places" searchHandler={searchHandler} />
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <button
              data-placeid={place.id}
              onClick={() => {
                onPlaceClick(place.id);
              }}
            >
              {place.display_name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
