const initialState = { game: null, screen: null, isLoading: false };

const detailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GAME_DETAIL":
      return {
        ...state,
        game: payload.game,
        screen: payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default detailReducer;
