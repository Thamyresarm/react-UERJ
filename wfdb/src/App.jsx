import "./App.css";
import MapHolder from "./components/MapHolder";
import Wireframe from "./components/Wireframe";
import MenuINPE from "./components/MenuINPE";
import { useEffect, useState, useMemo } from "react";
import INPEService from "./services/INPE.service";

function App() {
  const inpeService = useMemo(() => new INPEService(), []);
  const [url, setUrl] = useState("");
  const [geoJson, setGeoJson] = useState();

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
    <Wireframe>
      <MenuINPE onClick={(event) => setUrl(event)} activeUrl={url} />
      <MapHolder geoJson={geoJson} />
    </Wireframe>
  );
}
export default App;