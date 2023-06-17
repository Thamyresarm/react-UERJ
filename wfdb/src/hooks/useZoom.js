import { useState } from "react";

function useZoom() {
  const [zoom, setZoom] = useState(4);

  function zoomIn() {
    if (zoom < 11) setZoom(zoom + 1);
    console.log(zoom);
  }

  function zoomOut() {
    if (zoom > 0) setZoom(zoom - 1);
    console.log(zoom);
  }

  return { zoom, zoomIn, zoomOut, setZoom };
}

export default useZoom;