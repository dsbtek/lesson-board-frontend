import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LessonState {
    lessons: { id: number; title: string; status: string }[];
}

const initialState: LessonState = {
    lessons: [],
};

const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {
        addLesson: (
            state,
            action: PayloadAction<{
                id: number;
                title: string;
                status: string;
            }>,
        ) => {
            state.lessons.push(action.payload);
        },
        updateLessonStatus: (
            state,
            action: PayloadAction<{ id: number; status: string }>,
        ) => {
            const lesson = state.lessons.find(
                (l) => l.id === action.payload.id,
            );
            if (lesson) {
                lesson.status = action.payload.status;
            }
        },
        removeActiveUser: (
            state,
            action: PayloadAction<{ id: number; status: string }>,
        ) => {
            const lesson = state.lessons.find(
                (l) => l.id === action.payload.id,
            );
            if (lesson) {
                lesson.status = action.payload.status;
            }
        },
    },
});

export const { addLesson, updateLessonStatus, removeActiveUser } =
    lessonSlice.actions;
export default lessonSlice.reducer;
