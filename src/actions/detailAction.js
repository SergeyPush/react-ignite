import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAIL" });

  const detailData = await axios.get(gameDetailsURL(id));
  const screenData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GAME_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenData.data,
    },
  });
};
