import { Link, useLocation } from "react-router-dom";
function Navigation() {
  let location = useLocation().pathname;
  const menuItens = [
    { to: "/", label: "Alerta de 48hs" },
    { to: "/about", label: "Sobre a Ferramenta" },
  ];

  return (
    <div className="bg-sky-900 flex items-center px-4">
      <div className="flex-1">
        <img src="WFDB-logo.png" alt="Logo" className="w-32" />
      </div>
      <ul className="flex gap-2">
        {menuItens.map(({ to, label }, index) => (
          <li
            key={index}
            className={`p-2 bg-sky-700 rounded text-white hover:bg-amber-600 ${
              location === to ? "bg-amber-600" : ""
            }`}
          >
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;