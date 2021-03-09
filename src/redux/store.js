import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { ADD_ARTICLE } from "./actions";

const initialState = {
  articles: [],
  title: "Hellow Bro!",
  konten: "asd",
};

function rootReducer(state = initialState, action) {
  if (action.type === "GANTI_JUDUL") {
    return Object.assign({}, state, {
      title: action.title,
    });
  }
  if (action.type === "GANTI_KONTEN") {
    return { ...state, konten: action.konten }
  }
  // default state
  return state;
}
// const persistedReducer = persistReducer(
//   {
//     key: "root",
//     storage,
//   },
//   rootReducer
// );
const isDev = process.env.NODE_ENV == 'development'
export const store = createStore(rootReducer, isDev ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : '');
// export const persistor = persistStore(store);
