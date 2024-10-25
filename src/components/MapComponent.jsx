import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ lat, lon, boundingBox }) => {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={15}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[lat, lon]}>
        <Popup>Selected Address</Popup>
      </Marker>
      {boundingBox && <Rectangle bounds={boundingBox} color="blue" />}
    </MapContainer>
  );
};

export default MapComponent;
