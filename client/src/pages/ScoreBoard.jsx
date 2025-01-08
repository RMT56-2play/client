import { useNavigate } from "react-router";
import Background from "../components/Background";
import scoreboardBackground from "../assets/scoreboard background.png";

import { p2Api } from "../helpers/http-client";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

export default function Scoreboard() {
  const [scoreBoard, setScoreBoard] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const fetchScoreBoard = async () => {
    try {
      const response = await p2Api.get("/getscoreboard", {
        params: {
          gameId: localStorage.getItem("gameId"),
        },
      });
      console.log(response.data.players);
      setScoreBoard(
        [...response.data.players].sort((a, b) => b.score - a.score)
      );
      // console.log(scoreBoard);
      toast.success("Game has ended", {
        autoClose: 300,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchScoreBoard();
  }, []);

  return (
    <Background backgroundImage={scoreboardBackground}>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full sm:w-96 mx-4">
          <h1 className="text-4xl font-bold text-white text-center mb-6">
            Scoreboard
          </h1>

          <div className="overflow-x-auto bg-white rounded-lg shadow-lg mb-8">
            <table className="min-w-full text-center table-auto">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Score</th>
                </tr>
              </thead>
              <tbody>
                {scoreBoard.map((player, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-6">{player.id}</td>
                    <td className="py-3 px-6">{player.username}</td>
                    <td className="py-3 px-6 text-green-500">{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tombol Back di bawah tabel */}
          <div className="flex justify-center">
            <button
              onClick={handleBack}
              className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full">
              Back
            </button>
          </div>
        </div>
      </div>
    </Background>
  );
}
