import { useParams } from "react-router-dom";

  function CountryPage(props) {
      let { country } = useParams(); 
    return (
      <div className="p-6">
        <h1 className="text-3xl mb-4">{country}</h1>
        <p>Você clicou em {country}.</p>
      </div>
    );
  }

  export default CountryPage;
