import React from 'react';
import { SocketProvider } from './context/SocketContext';
import HomePage from './pages/HomePage';

export const AnimeApp = () => {
    return (
        <div>
            <SocketProvider>
                <HomePage/>
            </SocketProvider>
        </div>
    )
}
