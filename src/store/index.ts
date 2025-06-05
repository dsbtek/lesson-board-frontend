import { configureStore } from '@reduxjs/toolkit';
import lessonReducer from '../slices/lessonSlice';

const store = configureStore({
    reducer: {
        lesson: lessonReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
