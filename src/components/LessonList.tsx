'use client';
import { useEffect, useState } from 'react';
import { fetchLessons } from '../services/api';
import LessonCard from './LessonCard';
import { title } from 'process';
export default function LessonList() {
    const [lessons, setLessons] = useState<any[]>([
        {
            id: 1,
            tutor: 'Bala',
            status: 'ongoing',
            title: title,
        },
        {
            id: 2,
            tutor: 'Bala',
            status: 'completed',
            title: 'Computer',
        },
        {
            id: 3,
            tutor: 'Bala',
            status: 'upcoming',
            title: 'Computer',
        },
        {
            id: 4,
            tutor: 'Bala',
            status: 'upcoming',
            title: 'Computer',
        },
    ]);

    useEffect(() => {
        const loadLessons = async () => {
            try {
                const data = await fetchLessons();
                setLessons(data);
            } catch (error) {
                console.error('Error fetching lessons:', error);
            }
        };

        loadLessons();
    }, []);

    return (
        <div>
            <h1>Lessons</h1>
            <ul>
                {lessons.map((lesson) => (
                    <LessonCard
                        key={lesson.id}
                        status={lesson.status}
                        tutor={lesson.tutor}
                        title={lesson.title}
                    />
                ))}
            </ul>
        </div>
    );
}
