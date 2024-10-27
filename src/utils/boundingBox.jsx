import React from "react";
export default function extractBoundingBox() {
  const extractBoundingBox = (elements) => {
    if (!elements || elements.length === 0) return null;

    let minLat = Infinity,
      maxLat = -Infinity,
      minLon = Infinity,
      maxLon = -Infinity;

    elements.forEach((element) => {
      if (element.type === "way" && element.geometry) {
        element.geometry.forEach(({ lat, lon }) => {
          minLat = Math.min(minLat, lat);
          maxLat = Math.max(maxLat, lat);
          minLon = Math.min(minLon, lon);
          maxLon = Math.max(maxLon, lon);
        });
      }
    });

    if (minLat === Infinity || minLon === Infinity) {
      return null;
    }

    return [
      [minLat, minLon],
      [maxLat, maxLon],
    ]; // Leaflet format for a bounding box
  };

  return extractBoundingBox;
}
