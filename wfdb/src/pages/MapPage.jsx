import MapHolder from "../components/MapHolder";
import Wireframe from "../components/Wireframe";
import MenuINPE from "../components/MenuINPE";
import { useEffect, useState, useMemo } from "react";
import INPEService from "../services/inpe.service";
import useZoom from "../hooks/useZoom";

function MapPage() {
  const inpeService = useMemo(() => new INPEService(), []);
  const [url, setUrl] = useState("");
  const [geoJson, setGeoJson] = useState();
  const { zoom, zoomIn, zoomOut, setZoom } = useZoom();
  const [center, setCenter] = useState([-14.235004, -51.92528]);

  useEffect(() => {
    (async () => {
      if (url !== "") {
        console.log(url);
        let data = await inpeService.fetchData(url);
        console.log(data);
        setGeoJson(data);
      }
    })();
  }, [url, inpeService]);
  return (
    <>
      <Wireframe>
        <MenuINPE onClick={(event) => setUrl(event)} activeUrl={url} />
        <MapHolder
          geoJson={geoJson}
          zoom={zoom}
          center={center}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
        />
        <>
          <button
            className="bg-sky-950 text-white py-2 rounded-md w-full text-xs"
            onClick={() => zoomIn()}
          >
            Zoom In
          </button>
          <button
            className="bg-sky-950 text-white py-2 rounded-md w-full text-xs"
            onClick={() => zoomOut()}
          >
            Zoom Out
          </button>
        </>
      </Wireframe>
    </>
  );
}

export default MapPage;