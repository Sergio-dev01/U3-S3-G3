const initialState = {
  favourites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((job) => job._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default mainReducer;
