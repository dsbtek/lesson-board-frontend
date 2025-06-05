'use client';
import React from 'react';

interface LessonProps {
    title: string;
    tutor: string;
    status: 'ongoing' | 'completed' | 'upcoming';
}

export default function LessonCard({ title, tutor, status }: LessonProps) {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-600">Tutor: {tutor}</p>
            <span
                className={`px-2 py-1 rounded text-white ${
                    status === 'ongoing'
                        ? 'bg-green-500'
                        : status === 'completed'
                        ? 'bg-gray-500'
                        : 'bg-blue-500'
                }`}
            >
                {status}
            </span>
        </div>
    );
}
