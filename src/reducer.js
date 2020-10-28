export const initialState = {
  user: null,
  playlists: [],
  recents: [],
  playing: false,
  item: null,
  token: null,
  discover_weekly: null
  //remove after developing
//   token:
//     "BQBZK8ZG1cP0KRmNriw7auhaAfZKhl1QDz8pOfPNwOfzEGSmkXBkiogJyHzURdilJiJNsRgLhG7N5uRES_d1cco7X5djSClpW_5TGNZ4Z9XYN2S18ZtcvMrhGUEZmPn2VI_VooyMLUvk4U9JhdnTbIS5_JYFifFb",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      case "SET_RECENTS":
        return {
          ...state,
          recents: action.recents,
        };
        case "SET_DISCOVER_WEEKLY":
          return {
            ...state,
            discover_weekly: action.discover_weekly,
          };
    default:
      return state;
  }
};

export default reducer;
