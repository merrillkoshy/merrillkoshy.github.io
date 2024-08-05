import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { deutsch } from "./api/api-deutsch";

const rootReducer = combineReducers({
  deutsch: deutsch.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deutsch.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
