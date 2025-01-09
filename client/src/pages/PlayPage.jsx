import { useNavigate } from "react-router";
import playPageBg from "../assets/spot it.png";
import Background from "../components/Background";

import { useCallback, useEffect, useState } from "react";
import { p2Api } from "../helpers/http-client";

import { toast } from "react-toastify";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export default function PlayPage() {
  const [playerImages, setPlayerImages] = useState([]);
  const [deckImages, setDeckImages] = useState([]);
  const [scoreBoard, setScoreBoard] = useState([]);

  const navigate = useNavigate();

  const imageSpotIt = [
    { name: "anchor", img: "/anchor.png" },
    { name: "apple", img: "/apple.png" },
    { name: "art", img: "/art.png" },
    { name: "ball", img: "/ball.png" },
    { name: "baloon", img: "/baloon.png" },
    { name: "bomb", img: "/bomb.png" },
    { name: "bottle", img: "/bottle.png" },
    { name: "bulb", img: "/bulb.png" },
    { name: "cactus", img: "/cactus.png" },
    { name: "candle", img: "/candle.png" },
    { name: "car", img: "/car.png" },
    { name: "carrot", img: "/carrot.png" },
    { name: "cat", img: "/cat.png" },
    { name: "cheese", img: "/cheese.png" },
    { name: "clock", img: "/clock.png" },
    { name: "clown", img: "/clown.png" },
    { name: "dinasaur", img: "/dinasaur.png" },
    { name: "dog", img: "/dog.png" },
    { name: "doll", img: "/doll.png" },
    { name: "dolphin", img: "/dolphin.png" },
    { name: "dragon", img: "/dragon.png" },
    { name: "exclam", img: "/exclam.png" },
    { name: "eye", img: "/eye.png" },
    { name: "fire", img: "/fire.png" },
    { name: "flower", img: "/flower.png" },
    { name: "fourLeaf", img: "/fourLeaf.png" },
    { name: "ghost", img: "/ghost.png" },
    { name: "glasses", img: "/glasses.png" },
    { name: "heart", img: "/heart.png" },
    { name: "horse", img: "/horse.png" },
    { name: "ice", img: "/ice.png" },
    { name: "igloo", img: "/igloo.png" },
    { name: "key", img: "/key.png" },
    { name: "ladybug", img: "/ladybug.png" },
    { name: "lightning", img: "/lightning.png" },
    { name: "lips", img: "/lips.png" },
    { name: "lock", img: "/lock.png" },
    { name: "mapple", img: "/mapple.png" },
    { name: "moon", img: "/moon.png" },
    { name: "musicNode", img: "/musicNode.png" },
    { name: "ok", img: "/ok.png" },
    { name: "oneEye", img: "/oneEye.png" },
    { name: "painting", img: "/painting.png" },
    { name: "pencil", img: "/pencil.png" },
    { name: "question", img: "/question.png" },
    { name: "scissor", img: "/scissor.png" },
    { name: "skull", img: "/skull.png" },
    { name: "snowflake", img: "/snowflake.png" },
    { name: "snowman", img: "/snowman.png" },
    { name: "spider", img: "/spider.png" },
    { name: "stop", img: "/stop.png" },
    { name: "sun", img: "/sun.png" },
    { name: "target", img: "/target.png" },
    { name: "tree", img: "/tree.png" },
    { name: "water", img: "/water.png" },
    { name: "web", img: "/web.png" },
    { name: "zebra", img: "/zebra.png" },
  ];

  // const fetchPlayerCard = async () => {
  //   try {
  //     const response = await p2Api.get("/getplayercards", {
  //       params: {
  //         userId: localStorage.getItem("userId"),
  //         gameId: localStorage.getItem("gameId"),
  //       },
  //     });
  //     console.log(response.data);
  //     const playerTopCard = response.data.playerCards[0];
  //     // const playerCardImages = playerTopCard.map(
  //     //   (card) => imageSpotIt[card].img
  //     // );
  //     setPlayerImages(playerTopCard);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error fetching cards", {
  //       autoClose: 300,
  //     });
  //   }
  // };

  // const fetchDeckCard = async () => {
  //   try {
  //     const response = await p2Api.get("/getdeckcards", {
  //       params: {
  //         gameId: localStorage.getItem("gameId"),
  //       },
  //     });
  //     console.log(response.data);
  //     const deckTopCard = response.data.deckCards[0];
  //     // const deckCardImages = deckTopCard.map((card) => imageSpotIt[card].img);
  //     setDeckImages(deckTopCard);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Error fetching cards", {
  //       autoClose: 300,
  //     });
  //   }
  // };

  // const fetchScoreBoard = async () => {
  //   try {
  //     const response = await p2Api.get("/getscoreboard", {
  //       params: {
  //         gameId: localStorage.getItem("gameId"),
  //       },
  //     });
  //     console.log(response.data.players);
  //     setScoreBoard(response.data.players);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleAction = useCallback(
  //   async (imageId, e) => {
  //     e.preventDefault();
  //     try {
  //       console.log(imageId);
  //       const response = await p2Api.post("/action", {
  //         userId: localStorage.getItem("userId"),
  //         gameId: localStorage.getItem("gameId"),
  //         imageId: imageId,
  //       });
  //       console.log(response.data);
  //       toast.success(`${localStorage.getItem("username")} get 1pt`, {
  //         autoClose: 300,
  //       });
  //       if (response.data.message === "Game ended") {
  //         navigate("/scoreboard");
  //       } else {
  //         fetchPlayerCard();
  //         fetchDeckCard();
  //         fetchScoreBoard();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Image not matched", { autoClose: 300 });
  //     }
  //   },
  //   [navigate]
  // );

  // useEffect(() => {
  //   fetchPlayerCard();
  //   fetchDeckCard();
  //   fetchScoreBoard();
  // }, [handleAction]);

  useEffect(() => {
    socket.emit("joinGameRoom", localStorage.getItem("gameId"));

    const fetchInitialState = async () => {
      try {
        const response = await p2Api.get("/getgamestate", {
          params: {
            gameId: localStorage.getItem("gameId"),
            userId: localStorage.getItem("userId"),
          },
        });
        const gameState = response.data;
        const currentPlayer = gameState.players.find(
          (p) => p.id === Number(localStorage.getItem("userId"))
        );
        setPlayerImages(currentPlayer.playerCards[0]);
        setDeckImages(gameState.game.deckCards[0]);
        setScoreBoard(gameState.players);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInitialState();

    socket.on("actionError", (error) => {
      if (error.message === "Image not matched") {
        toast.error("Image not matched", { autoClose: 300 });
      }
    });

    socket.on("gameStateUpdate", (gameState) => {
      const currentPlayer = gameState.players.find(
        (p) => p.id === Number(localStorage.getItem("userId"))
      );
      setPlayerImages(currentPlayer.playerCards[0]);
      setDeckImages(gameState.game.deckCards[0]);
      setScoreBoard(gameState.players);
    });

    socket.on("gameEnded", (finalState) => {
      navigate("/scoreboard");
    });

    return () => {
      socket.off("gameStateUpdate");
      socket.off("actionError");
      socket.off("gameEnded");
    };
  }, [navigate]);

  const handleAction = useCallback(async (imageId, e) => {
    e.preventDefault();
    try {
      socket.emit("playerAction", {
        userId: localStorage.getItem("userId"),
        gameId: localStorage.getItem("gameId"),
        imageId: imageId,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Background backgroundImage={playPageBg}>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Main Game Area */}
        <div className="ml-12 mt-10 flex flex-wrap justify-center gap-8">
          {/* Left Deck (Point Deck) */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 w-64">
            <div className="bg-blue-500 text-white text-center py-2 rounded mb-4 font-semibold text-lg">
              Deck
            </div>
            <div className="grid grid-cols-2 gap-2">
              {deckImages.map((imageId) => (
                <div
                  key={imageId}
                  className="bg-white p-4 rounded-lg text-center shadow text-2xl">
                  <img src={imageSpotIt[imageId].img}></img>
                </div>
              ))}
            </div>
          </div>

          {/* Right Deck (Player Deck) */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 w-64">
            <div className="bg-sky-500 text-white text-center py-2 rounded mb-4 font-semibold text-lg">
              {localStorage.getItem("username")}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {playerImages.map((imageId) => (
                <button
                  key={imageId}
                  className="bg-white p-4 rounded-lg shadow hover:bg-gray-200 text-2xl"
                  onClick={(e) => {
                    handleAction(imageId, e);
                  }}>
                  <img src={imageSpotIt[imageId].img}></img>
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
                {scoreBoard.map((player) => (
                  <tr
                    key={player.id}
                    className="border-b border-gray-700 hover:bg-gray-800">
                    <td className="py-2">{player.id}</td>
                    <td className="py-2">{player.username}</td>
                    <td className="py-2">{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* End Game Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => navigate("/scoreboard")}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full">
                End Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
