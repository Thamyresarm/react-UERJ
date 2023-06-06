import { Map, GeoJson } from "pigeon-maps";
function MapHolder({ geoJson }) {
  return (
    <Map defaultCenter={[-14.235004, -51.92528]} defaultZoom={4}>
      <GeoJson
        data={geoJson}
        styleCallback={(feature, hover) => {
          if (feature.geometry.type === "LineString") {
            return { strokeWidth: "1", stroke: "black" };
          }
          return {
            fill: "#FFBF80",
            strokeWidth: "1",
            stroke: "white",
            r: "5",
          };
        }}
      />
    </Map>
  );
}

export default MapHolder;