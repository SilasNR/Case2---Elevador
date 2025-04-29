import "./Elevador.css"
import "./Cabin.css"
import { useState } from "react";

function Elevador() {
  let esperaBasica = 500;
  //let esperaTudo = 1000;

  let andar3 = 132;
  let andar2 = 291;
  let andar1 = 451;
  let andar0 = 611;

  function esperar(x: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  }

  const [filaAndares, setFilaAndares] = useState<number[]>([]);

  const [corBtnAndar0, setCorBtnAndar0] = useState("");
  const [corBtnAndar1, setCorBtnAndar1] = useState("");
  const [corBtnAndar2, setCorBtnAndar2] = useState("");
  const [corBtnAndar3, setCorBtnAndar3] = useState("");

  const [corBtn0, setCorBtn0] = useState("");
  const [corBtn1, setCorBtn1] = useState("");
  const [corBtn2, setCorBtn2] = useState("");
  const [corBtn3, setCorBtn3] = useState("");

  const [operation, setOperation] = useState(true);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [positionY, setPositionY] = useState(andar0);

  let porta = false;
  //const [porta, setPorta] = useState(false);
  const [p, setP] = useState(100);

  async function mudarAdar(atual: number) {
    switch (atual) {
      case 0:
        console.log("case 0 - " + atual);
        if (atual != currentFloor) {
          setPositionY(andar0);
          console.log("espera depois de mudar Y");
          await esperar(esperaBasica);
          abrirPorta();
          setCorBtnAndar0("gray");
          setCorBtn0("gray");
        }
        setCurrentFloor(atual)
        setOperation(true)
        await esperar(esperaBasica);
        await esperar(esperaBasica);
        fecharPort();

        break;
      case 1:
        console.log("case - " + atual);
        if (atual != currentFloor) {
          setPositionY(andar1);
          console.log("espera depois de mudar Y");
          await esperar(esperaBasica);
          abrirPorta();
          setCorBtnAndar1("gray");
          setCorBtn1("gray");
        }
        setCurrentFloor(atual)
        setOperation(true)
        await esperar(esperaBasica);
        await esperar(esperaBasica);
        fecharPort();

        break;
      case 2:
        console.log("case - " + atual);
        if (atual != currentFloor) {
          setPositionY(andar2);
          console.log("espera depois de mudar Y");
          await esperar(esperaBasica);
          abrirPorta();
          setCorBtnAndar2("gray");
          setCorBtn2("gray");
        }
        setCurrentFloor(atual)
        setOperation(true)
        await esperar(esperaBasica);
        await esperar(esperaBasica);
        fecharPort();

        break;
      case 3:
        console.log("case - " + atual);
        if (atual != currentFloor) {
          setPositionY(andar3);
          console.log("espera depois de mudar Y");
          await esperar(esperaBasica);
          abrirPorta();
          setCorBtnAndar3("gray");
          setCorBtn3("gray");
        }
        setCurrentFloor(atual)
        setOperation(true)
        await esperar(esperaBasica);
        await esperar(esperaBasica);
        fecharPort();
        break;

      default:
        break;
    }
  }

  async function fecharPorta() {
    if (!porta && filaAndares.length > 0) {
      setOperation(false);
      setP(0);
      await esperar(500);
      porta = true;
      setOperation(true);

      await processarFila();

      setFilaAndares([]);
    }
  }

  async function fecharPort() {
    if (operation) {
      setOperation(false)
      setP(0);
      await esperar(500);
      setOperation(true);
    }
    console.log("################################################################################################");
  }

  async function abrirPorta() {
    setOperation(false)
    setP(100);
    console.log("espera abrir a porta");
    await esperar(esperaBasica);
    console.log("abriu");
    porta = false;
    setOperation(true);
  }

  // async function processarFila() {
  //   if (filaAndares.length === 0) return;

  //   const copiaFila = [...filaAndares];
  //   let proximo = copiaFila[0];
  //   let subindo = proximo > currentFloor;
  //   copiaFila.sort((a, b) => subindo ? a - b : b - a);

  //   for (const andar of copiaFila) {
  //     if ((subindo && andar >= currentFloor) || (!subindo && andar <= currentFloor)) {
  //       await mudarAdar(andar);
  //       await esperar(esperaBasica);
  //       await esperar(esperaBasica);
  //       setFilaAndares((fila) => fila.filter((f) => f !== andar));
  //     } else if ((subindo && andar <= currentFloor) || (!subindo && andar >= currentFloor)) {
  //       await mudarAdar(andar);
  //       await esperar(esperaBasica);
  //       await esperar(esperaBasica);
  //       setFilaAndares((fila) => fila.filter((f) => f !== andar));
  //     }
  //   }
  // }

  async function processarFila() {
    if (filaAndares.length === 0) return;

    const primeiraSelecao = filaAndares[0];
    const todosAcima = filaAndares.every((andar) => andar >= currentFloor);
    const todosAbaixo = filaAndares.every((andar) => andar <= currentFloor);

    let filaParaAtender: number[];

    if (todosAcima || todosAbaixo) {
      const subindo = primeiraSelecao > currentFloor;
      filaParaAtender = [...filaAndares].sort((a, b) => subindo ? a - b : b - a);
    } else {
      filaParaAtender = [...filaAndares];
    }

    for (const andar of filaParaAtender) {
      await esperar(esperaBasica);
      await esperar(esperaBasica);
      await mudarAdar(andar);
      setFilaAndares((fila) => fila.filter((f) => f !== andar));
    }
  }

  function selecionouBtnAndar(selecionado: number) {
    if (currentFloor != selecionado) {
      setFilaAndares((fila) => {
        if (!fila.includes(selecionado)) {
          return [...fila, selecionado];
        }
        return fila;
      });

      switch (selecionado) {
        case 3:
          setCorBtnAndar3("green");
          setCorBtn3("rgb(187, 186, 128)");
          break;
        case 2:
          setCorBtnAndar2("green");
          setCorBtn2("rgb(187, 186, 128)");
          break;
        case 1:
          setCorBtnAndar1("green");
          setCorBtn1("rgb(187, 186, 128)");
          break;
        case 0:
          setCorBtnAndar0("green");
          setCorBtn0("rgb(187, 186, 128)");
          break;
      }
    }
  }

  return (
    <>
      <div id="titulo">Projeto Elevador</div>
      <div id="tudo">
        <div id="space">
          <div id="predio">
            <div id="cabin" style={{ top: positionY }}>
              <div id="door" style={{ width: p }}></div>
            </div>
            <div>
              <div id="f3" className="floor"><div className="btnAndar" onClick={() => { selecionouBtnAndar(3) }} style={{ backgroundColor: corBtnAndar3 }}></div><h1>3</h1></div>
              <div id="f2" className="floor"><div className="btnAndar" onClick={() => { selecionouBtnAndar(2) }} style={{ backgroundColor: corBtnAndar2 }}></div><h1>2</h1></div>
              <div id="f1" className="floor"><div className="btnAndar" onClick={() => { selecionouBtnAndar(1) }} style={{ backgroundColor: corBtnAndar1 }}></div><h1>1</h1></div>
              <div id="T" className="floor"><div className="btnAndar" onClick={() => { selecionouBtnAndar(0) }} style={{ backgroundColor: corBtnAndar0 }}></div><h1>T</h1></div>
            </div>
          </div>
          <div id="chao"></div>
        </div>
        <div id="controller">
          <div id="btn" onClick={() => { selecionouBtnAndar(3) }} style={{ backgroundColor: corBtn3 }}><h2>3</h2></div>
          <div id="btn" onClick={() => { selecionouBtnAndar(2) }} style={{ backgroundColor: corBtn2 }}><h2>2</h2></div>
          <div id="btn" onClick={() => { selecionouBtnAndar(1) }} style={{ backgroundColor: corBtn1 }}><h2>1</h2></div>
          <div id="btn" onClick={() => { selecionouBtnAndar(0) }} style={{ backgroundColor: corBtn0 }}><h2>T</h2></div>
          <div id="btn" onClick={() => { abrirPorta() }}><h2>{`<|>`}</h2></div>
          <div id="btn" onClick={() => { fecharPorta() }}><h2>{`>|<`}</h2></div>
        </div>
      </div>
    </>
  )
}


export default Elevador