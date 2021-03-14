import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const initialState = {
  articles: [],
  title: "Hellow Bro!",
  konten: "Javascript 4 lyfe ! ✊",
};

function rootReducer(state = initialState, action) {
  if (action.type === "GANTI_JUDUL") {
    return Object.assign({}, state, {
      title: action.title,
    });
  }
  if (action.type === "GANTI_KONTEN") {
    return { ...state, konten: action.konten };
  }
  return state;
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isDev = process.env.NODE_ENV == "development";
export const store = createStore(persistedReducer, isDev ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : "");
export const persistor = persistStore(store);
