import { useNavigate } from "react-router";
import Background from "../components/Background";
import { p2Api } from "../helpers/http-client";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { io } from "socket.io-client";
// const socket = io("http://localhost:3000");
const socket = io("https://rmt56.juang.site");

export default function CreateGame() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await p2Api.post("/creategame", { username });
      localStorage.setItem("gameId", response.data.game.id);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("username", response.data.user.username);

      socket.emit("joinWaitingRoom", response.data.game.id);

      toast.success("Game created successfully", {
        autoClose: 300,
      });
      navigate("/waiting");
    } catch (error) {
      console.log(error);
      toast.error("Error creating game", {
        autoClose: 300,
      });
    }
  };

  return (
    <Background>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full sm:w-96 mx-4">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Create Game
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-white text-lg font-semibold">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-64">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-[20%] w-full flex justify-center">
        <button
          onClick={handleBack}
          className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full">
          Back
        </button>
      </div>
    </Background>
  );
}
