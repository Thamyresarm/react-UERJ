import 'bulma/css/bulma.min.css';
import './App.css';
import sortBy from 'underscore/modules/sortBy.js'
import { estadosBrasileiroSigla } from "./estados";
import { useState } from "react";

const estadosBrasileiroOpcoes = sortBy(estadosBrasileiroSigla, "nome");
const valoresIniciaisDoFormulario = {
  nomeCompleto: "",
  email: "",
  estado: "",
};

const enviarFormulario = (event) => {
  event.preventDefault();
  console.log("Enviar formulário");
  const form = event.target; //<- Pega os elementos do formulário
  const formData = new FormData(form); // <- Pega os dados do formulário
  const formJson = Object.fromEntries(formData); // Transforma em um objeto json os dado
  // const formData = Object.fromEntries(new FormData(form)); <- refatoração
  console.log(formJson);
};


function App() {
  const [formValores, setFormValores] = useState(valoresIniciaisDoFormulario);

  const escutandoValorDosCampos = (event) => {
    const { name, value } = event.target;
    setFormValores({ ...formValores, [name]: value })
  };

  const limparFormulario = (event) => {
    event.preventDefault();
    setFormValores({ ...valoresIniciaisDoFormulario });
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Formulário de Incrição</h1>
          <p className="subtitle">Treinamento de React</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <form onSubmit={enviarFormulario}>
            <div className="columns">
              <div className="column">
                <label>Nome Completo</label>
                <input value={formValores.nomeCompleto} onChange={escutandoValorDosCampos} className="input" type="text" placeholder="Nome Completo" name="nomeCompleto" />
              </div>
              <div className="column">
                <label>E-mail</label>
                <input value={formValores.email} onChange={escutandoValorDosCampos} className="input" type="email" placeholder="Seu melhor e-mail" name="email" />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="select">
                  <select
                    name="estado" onChange={escutandoValorDosCampos}
                    value={formValores.estado}
                  >
                    <option value="">Escolha o Estado</option>
                    {estadosBrasileiroOpcoes.map((estado, estadoIndex) => (
                      <option value={estado.nome} key={estadoIndex}>
                        {estado.nome}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <button className="button is-primary" type="submit">
                  Enviar
                </button>
              </div>
              <div className="column">
                <button className="button" type="reset" onClick={limparFormulario}>
                  Limpar Formulário
                </button>
              </div>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}

export default App;
