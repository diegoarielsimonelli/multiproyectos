import { Route, Routes } from "react-router-dom";
import Memotest from "./screens/Memotest";
import Pokemon from "./screens/pokemon/Pokemon";
import WordPerMinute from "./screens/WordPerMinute";
import NotFound from "./screens/NotFound";
import Navbar from "./screens/navbar/Navbar";
import Index from "./screens/Index";
import Feriados from "./screens/Feriados";

function App() {
  return (
    <header>
      <Navbar />
      <Routes>
        <Route path="" element={<Index />} />
        <Route path="memotest" element={<Memotest />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="wpm" element={<WordPerMinute />} />
        <Route path="feriados" element={<Feriados />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </header>
  );
}

export default App;
