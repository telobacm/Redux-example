import { createStore } from "redux";

//Global State
const initialState = {
  nama: "-",
  umur: "-",
  background: "white",
  color: "black",
};

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      nama: action.nama,
    };
  }
  if (action.type === "CHANGE_AGE") {
    return {
      ...state,
      umur: 2021 - action.umur,
    };
  }
  if (action.type === "SWITCH-DARK") {
    return {
      ...state,
      background: action.background,
      color: action.color,
    };
  }
  return state;
};

//Store
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());
