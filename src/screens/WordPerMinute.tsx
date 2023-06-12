import { useEffect, useState } from "react";

const LEFT = [
  "ASDEF",
  "FDSA",
  "QWER",
  "ZXCV",
  "AQSWDEFRG",
  "ZAXSCDVFT",
  "AVRTWQ",
  "asdef",
  "fdsa",
  "vcxz",
  "vcewq",
  "qvzr",
  "af re",
  "fdas asdf",
  "qwer zxcv",
];
const RIGHT = [
  "jkñl",
  "ñlkj",
  "jukiloñp",
  "poiyu",
  "mñhn",
  "jukiloñp",
  "nhyumilñ",
  "m,-.",
  "JKÑL",
  "ÑLKJ",
  "POIYU",
  "MÑHN",
  "ñlkj uipo",
  "uiop ñlkj",
  "m,.- uop",
];
const WORDS = [...LEFT, ...RIGHT];
export default function WordPerMinute() {
  const [time, setTime] = useState(0);
  const [caracteres, setCaracteres] = useState(0);
  const [valorinput, setValorinput] = useState("");
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (valorinput === word) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setCaracteres((caracteres) => caracteres + word.length);
    }
    setValorinput("");
  }

  useEffect(() => {
    if (time !== 0) {
      const id = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [time]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        textAlign: "center",
      }}
    >
      {Boolean(time) && (
        <h1 style={{ fontSize: 40, color: "yellow" }}> {word}</h1>
      )}
      <h2> Caracteres Tipeados: {caracteres}</h2>

      <h2> Tiempo restante: {time}</h2>
      {LEFT.indexOf(word) > 0 ? "MANO IZQUIERDA ⬅️" : " MANO DERECHA ➡️"}
      {time ? (
        <>
          <form onClick={handleSubmit}>
            <input
              type="text"
              value={valorinput}
              autoFocus
              onChange={(e) => setValorinput(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => location.reload()}>Reset</button>
        </>
      ) : (
        <button onClick={() => setTime(60)}>Comenzar a tipear...</button>
      )}
    </div>
  );
}
