import axios from "axios";
import {
  popularGamesURL,
  newGames,
  upcomingGames,
  searchGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGames());
  const upcomingGamesData = await axios.get(upcomingGames());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "SEARH_GAME",
    payload: { searched: searchGames.data.results },
  });
};
