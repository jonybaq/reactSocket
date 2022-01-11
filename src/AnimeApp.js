import React from 'react'
import App from './App'
import { SocketProvider } from './context/SocketContext'

export const AnimeApp = () => {
    return (
        <div>
            <SocketProvider>
                <App/>
            </SocketProvider>
        </div>
    )
}
