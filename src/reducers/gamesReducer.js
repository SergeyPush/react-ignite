const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};
const gameReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "FETCH_GAMES":
      return { ...state, ...payload };
    case "SEARH_GAME":
      return { ...state, searched: payload.searched };
    case "CLEAR_SEARCH":
      return { ...state, searched: [] };
    default:
      return { ...state };
  }
};

export default gameReducer;
