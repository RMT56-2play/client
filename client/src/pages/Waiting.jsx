import { useNavigate } from "react-router";
import waitingPageBackground from "../assets/waitingRoom.png";
import Background from "../components/Background";
import { useEffect, useState } from "react";

import { p2Api } from "../helpers/http-client";
import { toast } from "react-toastify";

import { io } from "socket.io-client";
// const socket = io("http://localhost:3000");
const socket = io("https://rmt56.juang.site");

import { usePlayers } from "../contexts/player.context";

export default function Waiting() {
  // const [players, setPlayers] = useState([]);

  const navigate = useNavigate();

  // const fetchPlayers = async () => {
  //   try {
  //     const gameId = localStorage.getItem("gameId");
  //     // console.log(gameId);
  //     const response = await p2Api.get(`/waitplayer/`, { params: { gameId } });
  //     // console.log(response.data);
  //     setPlayers(response.data.players);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error fetching players");
  //   }
  // };

  // useEffect(() => {
  //   fetchPlayers();
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const gameId = localStorage.getItem("gameId");
  //     const response = await p2Api.get("/startgame", { params: { gameId } });
  //     console.log(response.data);
  //     navigate("/playPage");
  //     toast.success("Game start", {
  //       autoClose: 300,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.message, {
  //       autoClose: 300,
  //     });
  //   }
  // };

  const { players, updatePlayers } = usePlayers();

  useEffect(() => {
    const gameId = localStorage.getItem("gameId");

    socket.emit("joinWaitingRoom", gameId);

    // const fetchPlayers = async () => {
    //   try {
    //     const gameId = localStorage.getItem("gameId");
    //     // console.log(gameId);
    //     const response = await p2Api.get(`/waitplayer/`, {
    //       params: { gameId },
    //     });
    //     // console.log(response.data);
    //     setPlayers(response.data.players);
    //   } catch (error) {
    //     console.log(error);
    //     toast.error("Error fetching players");
    //   }
    // };

    // fetchPlayers();

    socket.on("playerListUpdate", (data) => {
      // setPlayers(data.players);
      updatePlayers(data.players);
    });

    socket.on("gameStart", (gameState) => {
      navigate("/playPage");
    });

    return () => {
      socket.off("playerListUpdate");
      socket.off("gameStart");
    };
  }, [navigate, 1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const gameId = localStorage.getItem("gameId");
    socket.emit("startGame", gameId);
  };

  return (
    <Background backgroundImage={waitingPageBackground}>
      <div className="bg-black bg-opacity-50 p-8 mb-12 rounded-lg shadow-lg w-full sm:w-96 mx-4">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Waiting for Players
        </h1>
        <div className="flex justify-center mb-4">
          <img
            src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            alt="Loading"
            className="w-12 h-12"
          />
        </div>

        <p className="text-white text-center mb-8">
          Share this Game ID: {localStorage.getItem("gameId")}
        </p>
        <p className="text-white text-center mb-8">
          Players who has joined will appear here.
        </p>

        {/* Tabel Daftar Pemain */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full text-center table-auto">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-6">Username</th>
              </tr>
            </thead>
            <tbody>
              {/* Daftar pemain hardcode */}
              {players.map((player) => (
                <tr key={player.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{player.User.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tombol Start Game */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full w-64">
            Start Game
          </button>
        </div>
      </div>
    </Background>
  );
}
