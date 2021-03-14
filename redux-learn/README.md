Buat Folder Redux
Buat Store.js
Isi Redux.js dengan:
-variabel Initial State yang isinya objek kek biasanya
-Fungsi Reducer ato orang biasa nulis rootReducer karena berisi banyak task reducer
-Store, pake createStore

Abis tu file nya pake aja defaultnya dulu: App.js
di Index.js jan lupa dikasi <Provider store={store}>

Isi App.js dengan:
-fungsi mapStateToProps alias this.props Geden nya
-fungsi mapDispatchToProps alias setState Geden nya
-kasih tempat buat global statenya, kasih yang string kasih juga yang integer
-terakhir pas export default App.js kasih subscription dengan : connect(mapStateToProps, mapDispatchToProps)(App)

nambah dark mode
kasih Actions.js di folder Redux
