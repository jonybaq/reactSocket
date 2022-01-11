import React from 'react'
import App from './App'
import { SocketProvider } from './context/SocketContext'
import HomePage from './pages/HomePage'

export const AnimeApp = () => {
    return (
        <div>
            <SocketProvider>
                <HomePage/>
            </SocketProvider>
        </div>
    )
}
