import Background from "../components/Background";
import { useNavigate } from "react-router";

export default function HowToPlay() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Background>
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full sm:w-96 mx-4 mb-[14%] mt-8">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          How to Play
        </h1>
        <div className="space-y-4 text-white">
          <p>
            Spot-It is a fun and fast-paced game where players compete to find
            matching symbols between cards. Here's how you can play:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Start a Game:</strong> Create a game and share the Game
              ID with your friends, or join an existing game using the Game
              ID.
            </li>
            <li>
              <strong>Objective:</strong> The goal is to spot the matching
              symbols on two cards as quickly as possible.
            </li>
            <li>
              <strong>Gameplay:</strong> Each round, two cards are displayed.
              Every card has exactly one symbol in common with another card.
            </li>
            <li>
              <strong>Win:</strong> The player who identifies the match first
              scores a point. Keep playing until a winner is declared!
            </li>
          </ol>
          <p>
            Get ready for an exciting and competitive experience with Spot-It!
          </p>
        </div>
          </div>
          
      <div className="absolute bottom-[1%]  w-full flex justify-center">
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
