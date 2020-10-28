export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  playlists: null,
  token: null
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
    default:
      return state;
  }
};

export default reducer;
