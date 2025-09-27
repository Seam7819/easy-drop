import { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import districts from "../../../public/districts.json"; // your 64 district dataset

// Fix Leaflet marker issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to move map when district found
const FlyToDistrict = ({ district }) => {
  const map = useMap();
  if (district) {
    map.flyTo([district.latitude, district.longitude], 10, {
      duration: 2,
    });
  }
  return null;
};

export default function CoverageMap() {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const markerRefs = useRef({});

  // Handle search
  const handleSearch = () => {
    if (!search.trim()) return;

    // Find district ignoring case + partial match
    const found = districts.find((d) =>
      d.district.toLowerCase().includes(search.toLowerCase())
    );

    if (found) {
      setSelectedDistrict(found);

      // Open popup programmatically after flyTo
      setTimeout(() => {
        const ref = markerRefs.current[found.district];
        if (ref) {
          ref.openPopup();
        }
      }, 2000);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h1>

      {/* Search Box */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      {/* Map */}
      <div className="w-full max-w-4xl h-[500px] rounded-2xl overflow-hidden shadow-lg border">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Move to searched district */}
          <FlyToDistrict district={selectedDistrict} />

          {/* Show all markers */}
          {districts.map((d, i) => (
            <Marker
              key={i}
              position={[d.latitude, d.longitude]}
              ref={(ref) => (markerRefs.current[d.district] = ref)}
            >
              <Popup>
                <h2 className="font-bold">{d.district}</h2>
                <p className="text-sm">Region: {d.region}</p>
                <p className="text-sm">City: {d.city}</p>
                <p className="text-sm">
                  Areas: {d.covered_area.join(", ")}
                </p>
                <img
                  src={d.flowchart}
                  alt={d.district}
                  className="mt-2 w-40 h-auto rounded"
                />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
