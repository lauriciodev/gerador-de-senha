import { useState } from "react";
import gerador from "./geradores";
import "./global.css";

function App() {
  const [quantidade, setQuantidade] = useState(4);
  const [maiuscula, setMaiuscula] = useState(false);
  const [minuscula, setMinuscula] = useState(false);
  const [numero, setNumero] = useState(false);
  const [simbolo, setSimbolo] = useState(false);

  const [senha, setSenha] = useState("____");
  const [copied, setCopied] = useState(false);
  return (
    <div className="Container">
      <div className="SubContainer">
        <h1>Gerador de senhas</h1>
        <div className="ContainerSenha">
          <h3>{senha}</h3>
          <button
            className="btn"
            onClick={() => {
              navigator.clipboard.writeText(senha);
              setCopied(() => setCopied(!copied));
            }}
          >
            {copied ? "copiado !" : "copiar"}
          </button>
        </div>
        <div className="InputsContainer">
          <div className="CheckContainer">
            <h4>quantidade de caracteres</h4>{" "}
            <input
              type="number"
              value={quantidade}
              min={1}
              max={10}
              onChange={(e) => {
                setQuantidade(e.target.value);
              }}
            />
          </div>
          <div className="CheckContainer">
            <h4>letras maiusculas</h4>{" "}
            <input type="checkbox" onChange={() => setMaiuscula(!maiuscula)} />
          </div>
          <div className="CheckContainer">
            <h4>letras minusculas</h4>{" "}
            <input type="checkbox" onChange={() => setMinuscula(!minuscula)} />
          </div>
          <div className="CheckContainer">
            <h4>numeros</h4>{" "}
            <input type="checkbox" onChange={() => setNumero(!numero)} />
          </div>
          <div className="CheckContainer">
            <h4>simbolos</h4>{" "}
            <input type="checkbox" onChange={() => setSimbolo(!simbolo)} />
          </div>
        </div>
        <button
          className="btn"
          onClick={() => {
            if (!maiuscula && !minuscula && !numero && !simbolo) {
              alert("por favor selecione os tipos de caracteres");
            }
            setSenha(
              gerador(quantidade, maiuscula, minuscula, numero, simbolo)
            );

            setCopied(false);
          }}
        >
          Gerar Senha
        </button>
      </div>
    </div>
  );
}

export default App;
