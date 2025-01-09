import { NavLink } from "react-router";
import Background from "../components/Background";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export default function LandingPage() {
  return (
    <Background>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Spot It
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <NavLink
            to="/createGame"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-64 text-center">
            Create Game
          </NavLink>
          <NavLink
            to="/joinGame"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-64 text-center">
            Join Game
          </NavLink>
          <NavLink
            to="/howtoplay"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-64 text-center">
            How to Play
          </NavLink>
        </div>
      </div>
    </Background>
  );
}
