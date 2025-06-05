import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    startSignalRConnection,
    listenToPresenceUpdates,
} from '../services/signalr';
import { RootState } from '../store';

export default function LessonPresence() {
    const activeUsers = useSelector(
        (state: RootState) => state.presence.activeUsers,
    );

    useEffect(() => {
        startSignalRConnection();
        listenToPresenceUpdates();
    }, []);

    return (
        <div>
            <h1>Active Students</h1>
            <ul>
                {activeUsers.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}
