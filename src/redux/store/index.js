import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

// const middleware = [thunk];

// const logger = store => {
//   return next => {
//       return action => {
//           console.log('[Middleware] Dispatching', action);
//           const result = next(action);
//           console.log('[Middleware] next state', store.getState());
//           return result;
//       }
//   }
// };

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(logger, thunk)),

//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
