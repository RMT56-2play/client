import { useNavigate } from "react-router";
import Background from "../components/Background";
import scoreboardBackground from "../assets/scoreboard background.png";


export default function Scoreboard() {
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate("/");  
    };
  
    const scoreboard = [
      { id: 1, name: "Player 1", score: 120 },
      { id: 2, name: "Player 2", score: 95 },
      { id: 3, name: "Player 3", score: 150 },
      { id: 4, name: "Player 4", score: 75 },
    ];
  
    return (
      <Background backgroundImage={scoreboardBackground}>
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full sm:w-96 mx-4">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Scoreboard</h1>
            
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
                  {scoreboard.map((player, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="py-3 px-6">{player.id}</td>
                      <td className="py-3 px-6">{player.name}</td>
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
                className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </Background>
    );
  }
  