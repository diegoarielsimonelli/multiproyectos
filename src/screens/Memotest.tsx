import alan from "./assets/img/alan.jpg";
import daina from "./assets/img/daina.jpg";
import diego from "./assets/img/diego.jpg";
import emma from "./assets/img/emma.jpg";
import hector from "./assets/img/hector.jpg";
import hernan from "./assets/img/hernan.jpg";
import ignacio from "./assets/img/ignacio.jpg";
import javier_salinas from "./assets/img/javier_salinas.jpg";
import javier from "./assets/img/javier.jpg";
import johana from "./assets/img/johana.jpg";
import julian from "./assets/img/julian.jpg";
import santiago from "./assets/img/santiago.jpg";
import logo from "./assets/img/inove_logo.ico";
import { useEffect, useState } from "react";
const IMAGES = [
  alan,
  daina,
  diego,
  emma,
  hector,
  hernan,
  ignacio,
  javier,
  javier_salinas,
  johana,
  julian,
  santiago,
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);
export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    if (selected.length == 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert("¡Ganaste! Que buena memoria. 😜");
      location.reload();
    }
  }, [guessed]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>MemoTest- Encontrá a los docentes de Inove</h1>

      <ul
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill,minmax(128px,1fr))",
        }}
      >
        {IMAGES.map((image) => {
          const [, url] = image.split("|");
          return (
            <li
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
              key={image}
              style={{
                padding: "4",
                cursor: "pointer",
                border: "1px solid #999",
              }}
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img src={url} alt={url} />
              ) : (
                <img src={logo} alt="search" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
