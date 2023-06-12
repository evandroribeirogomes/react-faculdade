import React, { useState } from "react";

export default function Calculadora() {
  const [visor, setVisor] = useState("0");
  const [operando1, setOperando1] = useState("");
  const [operando2, setOperando2] = useState("");
  const [operador, setOperador] = useState("");
  const [sinal, setSinal] = useState("");

  const pressionarTecla = (tecla) => {
    if (tecla.match(/[0-9]/)) {
      digitarNumero(tecla);
    } else if (tecla === ".") {
      digitarPonto();
    } else if (["+","-","*","/"].includes(tecla)) {
      definirOperador(tecla);
    } else if (tecla === "%") {
      calcularPorcentagem();
    } else if (tecla === "=") {
      realizarOperacao();
    } else if (tecla === "C") {
      limparVisores();
    } else if (tecla === "CE") {
      limparUltimoDigito();
    }
  };

  const digitarNumero = (numero) => {
    if (operador) {
      setOperando2(operando2 + numero);
      setVisor(sinal + operando2 + numero);
    } else {
      setOperando1(operando1 + numero);
      setVisor(sinal + operando1 + numero);
    }
  };

  const digitarPonto = () => {
    if (operador) {
      if (!operando2.includes(".")) {
        setOperando2(operando2 + ".");
        setVisor(sinal + operando2 + ".");
      }
    } else {
      if (!operando1.includes(".")) {
        setOperando1(operando1 + ".");
        setVisor(sinal + operando1 + ".");
      }
    }
  };

  const definirOperador = (op) => {
    if (!operador) {
      setOperador(op);
      setVisor(sinal + op);
    }
  };

  const calcularPorcentagem = () => {
    if (operador && operando2) {
      const valorPorcentagem = parseFloat(operando2) / 100;
      const resultado = (parseFloat(operando1) * valorPorcentagem).toString();
      setVisor(resultado);
    }
  };

  const realizarOperacao = () => {
    if (operador && operando1 && operando2) {
      let resultado = "";
      const num1 = parseFloat(operando1) * (sinal === "-" ? -1 : 1);
      const num2 = parseFloat(operando2) * (sinal === "-" ? -1 : 1);
      
      if (operador === "+") {
        resultado = (num1 + num2).toString();
      } else if (operador === "-") {
        resultado = (num1 - num2).toString();
      } else if (operador === "*") {
        resultado = (num1 * num2).toString();
      } else if (operador === "/") {
        if (num2 !== 0) {
          resultado = (num1 / num2).toString();
        } else {
          resultado = "impossivel seu burro";
        }
      }
      
      setVisor(resultado);
      setOperando1(resultado);
      setOperando2("");
      setOperador("");
      setSinal(resultado.startsWith("-") ? "-" : "");
    }
  };

  const limparVisores = () => {
    setVisor("0");
    setOperando1("");
    setOperando2("");
    setOperador("");
    setSinal("");
  };

  const limparUltimoDigito = () => {  
    if (operador) {
      setOperando2(operando2.slice(0, -1));
      setVisor(sinal + operando2.slice(0, -1));
    } else {
      setOperando1(operando1.slice(0, -1));
      setVisor(sinal + operando1.slice(0, -1));
    }
  };

  const alternarSinal = () => {
    if (operador) {
      setSinal(sinal === "" ? "-" : "");
      setVisor((sinal === "" ? "-" : "") + operando2);
    } else {
      setSinal(sinal === "" ? "-" : "");
      setVisor((sinal === "" ? "-" : "") + operando1);
    }
  };

  return (
    <div className="calculadora">
      <input type="text" value={visor} readOnly className="visor" />
      <div className="botoes">
        <button className="botao2" onClick={() => pressionarTecla("C")}>C</button>
        <button className="botao2" onClick={() => pressionarTecla("CE")}>CE</button>   
        <button className="botao2" onClick={alternarSinal}>+/-</button>
        <button className="botao2" onClick={() => pressionarTecla("%")}>%</button>
       
      </div>
      <div className="botoes">
        <button className="botao" onClick={() => pressionarTecla("7")}>7</button>
        <button className="botao" onClick={() => pressionarTecla("8")}>8</button>
        <button className="botao" onClick={() => pressionarTecla("9")}>9</button>
        <button className="botao2" onClick={() => pressionarTecla("/")}>/</button>
      </div>
      <div className="botoes">
        <button className="botao" onClick={() => pressionarTecla("4")}>4</button>
        <button className="botao" onClick={() => pressionarTecla("5")}>5</button>
        <button className="botao" onClick={() => pressionarTecla("6")}>6</button>
        <button className="botao2" onClick={() => pressionarTecla("*")}>*</button>
      </div>
      <div className="botoes">
        <button className="botao" onClick={() => pressionarTecla("1")}>1</button>
        <button className="botao" onClick={() => pressionarTecla("2")}>2</button>
        <button className="botao" onClick={() => pressionarTecla("3")}>3</button>
        <button className="botao2" onClick={() => pressionarTecla("-")}>-</button>
      </div>
      <div className="botoes">
        <button className="botao" onClick={() => pressionarTecla("0")}>0</button>
        <button className="botao" onClick={() => pressionarTecla(".")}>.</button>
        <button className="botao" onClick={() => pressionarTecla("=")}>=</button>
        <button className="botao2" onClick={() => pressionarTecla("+")}>+</button>
        
      </div>
    </div>
  );
}
