// tslint:disable:typedef
import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { AuthReducer } from './Auth/AuthReducer';
import { CounterReducer } from './Counter/CounterReducer';

const loggerMiddleware: Middleware = createLogger();

// tslint:disable-next-line:no-any
export const ConfigureStore = () => {
  return createStore(
    combineReducers({
      AuthReducer: AuthReducer,
      CounterReducer: CounterReducer,
    }),
    {},
    applyMiddleware(loggerMiddleware),
  );
};
