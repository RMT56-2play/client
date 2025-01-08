import { useState, useEffect } from "react";
import Background from "../components/Background";
import { useNavigate } from "react-router";
import axios from "../config/axiosInstance";
import Swal from "sweetalert2";

export default function CreateGame() {
  const navigate = useNavigate();
  const [gameName, setGameName] = useState([]); 

    const handleBack = () => {
      navigate("/");  
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/waiting");
    };

    async function fecthGameName() {
      try {
        const { data } = await axios({
          method: "post",
          url: "/creategame",
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        });
        setGameName(data);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
        });
      }
    }

    useEffect(() => {
      fecthGameName();
    }, []);

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

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-64"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-[20%] w-full flex justify-center">
        <button
          onClick={handleBack}
          className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full"
        >
          Back
        </button>
      </div>
    </Background>
  );
}