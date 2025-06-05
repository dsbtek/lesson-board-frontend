import axios from 'axios';

const API_URL = 'http://localhost:5083/api'; // Replace with your backend URL

export const fetchLessons = async () => {
    const response = await axios.get(`${API_URL}/lessons`);
    return response.data;
};

export const fetchTutorPerformance = async (tutorId: number) => {
    const response = await axios.get(
        `${API_URL}/tutors/${tutorId}/performance`,
    );
    return response.data;
};
