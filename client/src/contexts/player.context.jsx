import { createContext, useContext, useState } from "react";

export const PlayerContext = createContext({
  players: [],
});

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const updatePlayers = (newPlayers) => {
    setPlayers(newPlayers);
  };

  return (
    <PlayerContext.Provider value={{ players, updatePlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayers = () => {
  return useContext(PlayerContext);
};
