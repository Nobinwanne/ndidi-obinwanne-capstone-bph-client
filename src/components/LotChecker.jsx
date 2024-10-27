import React from "react";
import { useState } from "react";
import axios from "axios";
import MapComponent from "./MapComponent.jsx";
import extractBoundingBox from "../utils/boundingBox.jsx";
import "leaflet/dist/leaflet.css";
import Button from "./Button.jsx";

const LotChecker = () => {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(53.5461); // Default to Edmonton lat
  const [lon, setLon] = useState(-113.4938); // Default to Edmonton lon
  const [isVacant, setIsVacant] = useState(null);
  const [boundingBox, setBoundingBox] = useState(null);

  const checkVacantLot = async (lat, lon) => {
    const query = `
      [out:json];
      (
        way["landuse"="residential"](around:50,${lat},${lon});
        way["building"](around:50,${lat},${lon});
      );
      out body geom;
    `;

    const response = await axios.post(
      "https://overpass-api.de/api/interpreter",
      `data=${encodeURIComponent(query)}`
    );
    return response.data;
  };
  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    // Geocode the address to get lat and lon (use a geocoding service)
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json`;
    const geoResponse = await axios.get(geocodeUrl);
    const location = geoResponse.data[0];

    if (location) {
      setLat(location.lat);
      setLon(location.lon);

      const data = await checkVacantLot(location.lat, location.lon);
      const boundingBox = extractBoundingBox(data.elements);

      if (boundingBox) {
        setBoundingBox(boundingBox);
        setIsVacant(false);
      } else {
        setBoundingBox(null);
        setIsVacant(true);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 overflow-hidden rounded-lg bg-white shadow">
        <h1 className="mr-2">Search For Vacant Lots</h1>
        <form className="flex flex-col gap-3" onSubmit={handleAddressSubmit}>
          <input
            id="lot-form"
            name="lot-form"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address in Edmonton"
            className="form-input overflow-hidden rounded-lg shadow-sm ring-1"
          />
          <div className="w-20">
            <Button content="Search" />
          </div>
        </form>

        {isVacant !== null && (
          <p className="text-base font-bold text-lime-600">
            {isVacant ? "This lot is vacant" : "This lot is not vacant"}
          </p>
        )}
      </div>
      <MapComponent lat={lat} lon={lon} boundingBox={boundingBox} />
    </>
  );
};

export default LotChecker;
