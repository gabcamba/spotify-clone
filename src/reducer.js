export const initialState = {
  user: null,
  playlists: [],
  recents: [],
  playing: false,
  item: null,
  token: null,
  discover_weekly: null,
  savedTracks: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_USER_PLAYLISTS':
      return {
        ...state,
        userPlaylists: action.userPlaylists,
      };
    // case 'SET_RECENTS':
    //   return {
    //     ...state,
    //     recents: action.recents,
    //   };
    // case 'SET_DISCOVER_WEEKLY':
    //   return {
    //     ...state,
    //     discover_weekly: action.discover_weekly,
    //   };
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };
    // case 'SET_SAVED_TRACKS':
    //   return {
    //     ...state,
    //     savedTracks: action.savedTracks,
    //   };
    case 'SET_DISPLAY_LIST':
      return {
        ...state,
        displayList: action.displayList,
      };
    case 'SET_DISPLAY_TITLE':
      return {
        ...state,
        displayTitle: action.displayTitle,
      };
    case 'SET_DISPLAY_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };
    case 'SET_DISPLAY_IMAGE':
      return {
        ...state,
        heroImage: action.heroImage,
      };
    default:
      return state;
  }
};

export default reducer;
