import * as signalR from '@microsoft/signalr';
import store from '../store';
import { addActiveUser, removeActiveUser } from '../slices/lessonSlice';

const API_URL = 'http://localhost:5000/hub';

const connection = new signalR.HubConnectionBuilder()
    .withUrl(API_URL)
    .configureLogging(signalR.LogLevel.Information)
    .build();

export const startSignalRConnection = async () => {
    try {
        await connection.start();
        console.log('SignalR Connected!');
    } catch (error) {
        console.error('SignalR Connection Error:', error);
    }
};

export const listenToPresenceUpdates = () => {
    connection.on('UserJoined', (userName) => {
        store.dispatch(addActiveUser(userName));
    });

    connection.on('UserLeft', (userName) => {
        store.dispatch(removeActiveUser(userName));
    });
};
