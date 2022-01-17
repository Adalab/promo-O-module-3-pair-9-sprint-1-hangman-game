import { useState } from 'react';

import '../styles/App.scss';

let answer = 'katakroker';
const answerArray = answer.split(''); // utilizar funcion split (divide una cadena de texto en una tabla de subcadenas)
// despues se podria utilizar un find
// hacer pequeñas funiones para despues llamarlas en la "handleLastLetter"

function App() {
  const [lastLetter, setlastLetter] = useState(''); // ultima letra del input
  const [failure, setFailure] = useState(0); // hombrecito
  const [failedLetters, setFailedLetters] = useState([]); // letras falladas
  const [correctLetters, setCorrectLetters] = useState([]); // letras correctas

  const handleLastLetter = (event) => {
    const newValue = event.currentTarget.value;
    //console.log(newValue)
    setlastLetter(newValue);
    //console.log(answerArray.includes(newValue)) // esto meterlo en un if
    return answerArray //esto no, hay que hacer un if y no filter ni map
      .filter((eachAnswer) => eachAnswer.includes(newValue))
      .map((eachAnswer) => {
        return eachAnswer
          ? setCorrectLetters([...correctLetters, newValue])
          : setFailedLetters([eachAnswer]);
      });
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleLastLetter}
            />
          </form>
        </section>
        <section className="dummy error-5">
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
      <div>Letra metida: {lastLetter}</div>
      <div>FALLOS: {failedLetters}</div>
      <div>CORRECTAS: {correctLetters}</div>
    </div>
  );
}

export default App;
