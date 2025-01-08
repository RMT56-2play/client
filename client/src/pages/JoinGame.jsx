import { useNavigate } from "react-router";
import Background from "../components/Background";

export default function JoinGame() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    navigate("/waiting");
  };


  return (
    <Background>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full sm:w-96 mx-4">
          <h1 className="text-4xl font-bold text-white text-center mb-6">
            Join Game
          </h1>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-white text-lg font-semibold"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="gameId"
                className="block text-white text-lg font-semibold"
              >
                Game ID
              </label>
              <input
                id="gameId"
                type="text"
                placeholder="Enter Game ID"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-64"
              >
                Join Game
              </button>
            </div>
          </form>
        </div>

        {/* Tombol Back di luar wrapper bg-black */}
        <div className="absolute bottom-[13%] w-full flex justify-center">
          <button
            onClick={handleBack}
            className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full"
          >
            Back
          </button>
        </div>
      </div>
    </Background>
  );
}
