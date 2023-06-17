import { useEffect, useState } from "react";
import Notification from "./Notification";
import { Map, GeoJson } from "pigeon-maps";

function MapHolder({ geoJson, zoom, center, onBoundsChanged }) {
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const clickHandler = ({ event, anchor, payload }) => {
    console.log("event", event);
    console.log("anchor", anchor);
    console.log("payload", payload);
    setAdditionalInfo(payload.properties);
  };
  useEffect(() => {
    setAdditionalInfo(null);
  }, [geoJson]);
  return (
    <>
      <Notification geoJson={geoJson} additionalInfo={additionalInfo} />
      <Map center={center} zoom={zoom} onBoundsChanged={onBoundsChanged}>
        <GeoJson
          data={geoJson}
          onClick={clickHandler}
          styleCallback={(feature, hover) => {
            if (feature.geometry.type === "LineString") {
              return { strokeWidth: "1", stroke: "black" };
            }
            return {
              fill: "#FFBF80",
              strokeWidth: "1",
              stroke: "white",
              r: "10",
            };
          }}
        />
      </Map>
    </>
  );
}