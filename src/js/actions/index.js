import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(data) {
  return { type: ADD_ARTICLE, payload: data };
}

// export function gantiJudul(str) {
//   return { type: "TITLE", asdf: str };
// }
