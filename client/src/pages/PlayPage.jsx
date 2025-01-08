import Background from "../components/Background";
import playPageBg from "../assets/spot it.png";
import { useNavigate } from "react-router";

export default function PlayPage() {
  const navigate = useNavigate();

  const dummyImages = ["🍎", "🍊", "🍋", "🍌", "🍇", "🍉", "🍓", "🍍"];

  const dummyScoreboard = [
    { id: 1, name: "Player1", score: 10 },
    { id: 2, name: "Player2", score: 8 },
    { id: 3, name: "Player3", score: 12 },
    { id: 4, name: "You", score: 15 },
  ];

  return (
    <Background backgroundImage={playPageBg}>
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Main Game Area */}
      <div className="ml-12 mt-10 flex flex-wrap justify-center gap-8">
        {/* Left Deck (Point Deck) */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 w-64">
          <div className="bg-blue-500 text-white text-center py-2 rounded mb-4 font-semibold text-lg">
            Point
          </div>
          <div className="grid grid-cols-2 gap-2">
            {dummyImages.map((image, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow text-2xl"
              >
                {image}
              </div>
            ))}
          </div>
        </div>
  
        {/* Right Deck (Player Deck) */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 w-64">
          <div className="bg-sky-500 text-white text-center py-2 rounded mb-4 font-semibold text-lg">
            Rubi
          </div>
          <div className="grid grid-cols-2 gap-2">
            {dummyImages.map((image, index) => (
              <button
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:bg-gray-200 text-2xl"
              >
                {image}
              </button>
            ))}
          </div>
        </div>
  
        {/* Scoreboard */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-4 w-64 self-start">
          <div className="text-white text-center rounded mb-4 font-semibold text-lg">
            Scoreboard
          </div>
          <table className="w-full text-white text-center">
            <thead>
              <tr className="bg-gray-700">
                <th className="py-2">ID</th>
                <th className="py-2">Name</th>
                <th className="py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {dummyScoreboard.map((player) => (
                <tr
                  key={player.id}
                  className="border-b border-gray-700 hover:bg-gray-800"
                >
                  <td className="py-2">{player.id}</td>
                  <td className="py-2">{player.name}</td>
                  <td className="py-2">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* End Game Button */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => navigate("/scoreboard")}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full"
            >
              End Game
            </button>
          </div>
        </div>
      </div>
    </div>
  </Background>
  
  );
}
