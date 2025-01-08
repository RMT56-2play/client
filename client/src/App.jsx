import { BrowserRouter, Route, Routes } from "react-router";
import CreateGame from "./pages/CreateGame";
import JoinGame from "./pages/JoinGame";
import LandingPage from "./pages/LandingPage";
import Waiting from "./pages/Waiting";
import Scoreboard from "./pages/ScoreBoard";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createGame" element={<CreateGame />} />
        <Route path="/joinGame" element={<JoinGame />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
