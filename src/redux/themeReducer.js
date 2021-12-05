const CHANGE_THEME = "CHANGE_THEME";

const initialState = {
  value: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

// action
export const themeMode = (newTheme) => ({
  type: CHANGE_THEME,
  payload: newTheme,
});

export default themeReducer;
