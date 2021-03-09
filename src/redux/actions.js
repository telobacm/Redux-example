export const ADD_ARTICLE = "ADD_ARTICLE";

export function addArticle(data) {
  return { type: ADD_ARTICLE, payload: data };
}

export function gantiJudul(isi) {
  return { type: "GANTI_JUDUL", title: isi };
}
