import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

let INITIAL_STATE = {darkMode: false};

const currentTime = new Date();
const currentHour = currentTime.getHours();

if (6 > currentHour > 18) {
  INITIAL_STATE = {darkMode: true};
}

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {darkMode: !state.darkMode};
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{state, dispatch}} >
      {props.children}
    </ThemeContext.Provider>
  )
}