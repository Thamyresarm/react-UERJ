import { useState, useEffect, useMemo } from "react";
import INPEService from "../services/INPE.service";

function MenuINPE({ onClick, activeUrl }) {
  const inpeService = useMemo(() => new INPEService(), []);
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await inpeService.menu();
      let prepareddata = data.files.map((item) => {
        const url = item.links.filter(
          (link) => link.name === "48h (JSON)"
        )[0].url;
        return {
          label: item.name,
          url,
        };
      });
      setMenuData(prepareddata);
    })();
  }, [inpeService]);
  const handleOnClick = (event) => {
    const url = event.target.dataset.url;
    onClick(url);
  };

  const isActive = (url) => {
    return url === activeUrl
      ? "bg-amber-500 hover:bg-amber-500"
      : "bg-sky-800 hover:bg-sky-900";
  };
  return (
    <ul className="w-full block">
      {menuData?.map((item, index) => (
        <li key={index}>
          <button
            className={`rounded-full w-full mb-3 py-2 text-white  ${isActive(
              item.url
            )}`}
            onClick={handleOnClick}
            data-url={item.url}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MenuINPE;