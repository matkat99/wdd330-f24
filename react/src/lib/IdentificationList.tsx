import { useState, useEffect } from "react";
interface Identifications {
  id: number;
  observation: {
    id: number;
    taxon: {
      id: number;
      preferred_common_name: string;
      default_photo: {
        medium_url: string;
      };
    };
  };
}
export default function IdentificationList({ placeId }: { placeId: number }) {
  const [identificationList, setIdentificationList] = useState<
    Identifications[]
  >([]);

  useEffect(() => {
    let cancelFetch = false;
    const getIdentifications = async function (placeId: number) {
      const res = await fetch(
        `https://api.inaturalist.org/v1/identifications?current=true&place_id=${placeId}&order=desc&order_by=created_at`
      );
      if (!res.ok) throw new Error(await res.json());
      const data = await res.json();
      setIdentificationList(data.results);
    };
    if (!cancelFetch) getIdentifications(placeId);
    console.log("effect");
    return () => {
      cancelFetch = true;
    };
  }, [placeId]);

  return (
    <div>
      <h2>Identification List</h2>

      <ul>
        {identificationList.map((id) => (
          <li key={id.id}>
            <img
              src={id.observation.taxon.default_photo.medium_url}
              alt={"Image of " + id.observation.taxon.preferred_common_name}
            />
            <p>{id.observation.taxon.preferred_common_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
