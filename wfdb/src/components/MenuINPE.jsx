import { useState, useEffect, useMemo } from "react";
import INPEService from "../services/inpe.service";

function MenuINPE({ onClick }) {
  const inpeService = useMemo(() => new INPEService(), []);
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await inpeService.menu();
      let prepareddata = data.files.map((item) => {
        const url = item.links.filter(
          (link) => link.name === "24h (JSON)"
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
  return (
    <ul className="w-full block">
      {menuData?.map((item, index) => (
        <li key={index}>
          <button
            className="rounded-full bg-sky-800 w-full mb-3 py-2 text-white hover:bg-sky-900"
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