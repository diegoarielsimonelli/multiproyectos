const FERIADOS = [
  {date: new Date("2023, 01, 01"), name: "Año Nuevo"},
  {date: new Date("2023, 02, 27"), name: "Carnaval"},
  {date: new Date("2023, 02, 28"), name: "Carnaval"},
  {
    date: new Date("2023, 03, 24"),
    name: "Día Nacional de la Memoria por la Verdad y la Justicia",
  },
  {
    date: new Date("2023, 04, 02"),
    name: "Día del Veterano y de los Caídos en la Guerra de Malvinas",
  },
  {date: new Date("2023, 04, 14"), name: "Viernes Santo"},
  {date: new Date("2023, 05, 01"), name: "Día del Trabajador"},
  {date: new Date("2023, 05, 25"), name: "Día de la Revolución de Mayo"},
  {
    date: new Date("2023, 06, 17"),
    name: "Paso a la Inmortalidad del General Martín Miguel de Güemes",
  },
  {
    date: new Date("2023, 06, 20"),
    name: "Paso a la Inmortalidad del General Manuel Belgrano",
  },
  {date: new Date("2023, 07, 09"), name: "Día de la Independencia"},
  {
    date: new Date("2023, 08, 21"),
    name: "Paso a la Inmortalidad del General José de San Martín",
  },
  {
    date: new Date("2023, 10, 08"),
    name: "Día del Respeto a la Diversidad Cultural",
  },
  {date: new Date("2023, 12, 25"), name: "Navidad"},
];

const hoy = new Date();

const proximoFeriado = FERIADOS.find((holiday) => holiday.date > hoy) || {
  ...FERIADOS[0],
  date: new Date(
    FERIADOS[0].date.getFullYear() + 1,
    FERIADOS[0].date.getMonth(),
    FERIADOS[0].date.getDate() + 1,
  ),
};

const feriadoAnterior = FERIADOS.reverse().find((feriado) => feriado.date < hoy) || {
  name: "No hay feriados anteriores en este momento.",
  date: new Date(" "),
};

const diferenciaDias = Math.floor((proximoFeriado.date.getTime() - hoy.getTime()) / 86400000);

export default function Feriados() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>
        {diferenciaDias === 0
          ? `HOY ES FERIADO: ${proximoFeriado.name} 😁`
          : `Faltan ${diferenciaDias} días para el próximo feriado`}
      </h1>
      {diferenciaDias && (
        <>
          <h4>El próximo feriado es:</h4>
          <ul>
            <li>{proximoFeriado.name}</li>
            <li>{proximoFeriado.date.toLocaleDateString("es-AR")}</li>
          </ul>
        </>
      )}

      {diferenciaDias && (
        <>
          <h4>El feriado pasado fue:</h4>
          <ul>
            <li>{feriadoAnterior.name}</li>
            <li>{feriadoAnterior.date.toLocaleDateString("es-AR")}</li>
          </ul>
        </>
      )}
    </div>
  );
}
