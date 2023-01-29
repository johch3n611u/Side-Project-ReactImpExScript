import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import featuresReducer from '../features/featuresSlice';
import counterReducer from '../features/counter/counterSlice';
import impexScriptReducer from '../features/impex-script/impexScriptSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    features: featuresReducer,
    impexScript: impexScriptReducer,
  },
  // https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
