import * as React from "react";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./src/store/reducers";
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from "redux-persist";
import Main from './src'
import thunk from 'redux-thunk';
const middleware = [thunk];
const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,  applyMiddleware(...middleware));



function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
         
            <Main />
          
        </PersistGate>
      </Provider>
    </>
  );
}
export default App;
