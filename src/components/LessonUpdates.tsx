'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    startSignalRConnection,
    listenToLessonUpdates,
} from '../services/signalr';
import { RootState } from '../store';

export default function LessonUpdates() {
    const lessons = useSelector((state: RootState) => state.lesson.lessons);
    const dispatch = useDispatch();

    useEffect(() => {
        startSignalRConnection();
        listenToLessonUpdates();
    }, [dispatch]);

    return (
        <div>
            <h1>Live Lesson Updates</h1>
            <ul>
                {lessons.map((lesson) => (
                    <li key={lesson.id}>
                        {lesson.title} - {lesson.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}
