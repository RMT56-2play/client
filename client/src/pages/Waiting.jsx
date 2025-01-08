import { useNavigate } from "react-router";
import waitingPageBackground from "../assets/waitingRoom.png";
import Background from "../components/Background";

export default function Waiting() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/playPage");
  };

  return (
    <Background backgroundImage={waitingPageBackground}>
      <div className="bg-black bg-opacity-50 p-8 mb-12 rounded-lg shadow-lg w-full sm:w-96 mx-4">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Waiting for Players
        </h1>
        <p className="text-white text-center mb-8">
          Players who joined the game will appear here.
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
              <tr className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">Player1</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">Player2</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">Player3</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">Player4</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tombol Start Game */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full w-64"
          >
            Start Game
          </button>
        </div>
      </div>
    </Background>
  );
}
