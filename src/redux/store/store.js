import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import sessionReducer from '../auth/sessionReducer';
import rootReducers from '../rootReducer';

import { menuReducer, entityReducer } from '../menu';
import cartReducer from '../cart/cartReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  menu: menuReducer,
  cart: cartReducer,
  entity: entityReducer,
});

// const rootReducer = combineReducers({
//   session:  sessionReducer,
//   menu: menuReducer,
//   cart: cartReducer,
//   entity: entityReducer,
// });

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = [thunk];
// const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

// export let store = createStore(rootReducer, enhancer)

export let store = createStore(persistedReducer, enhancer);
export let persistor = persistStore(store);
