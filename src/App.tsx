import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Box from '@mui/material/Box';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "anime/:id",
                element: <DetailPage />
            }
        ]
    }
])
function App() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{
                    flex: 1,
                    padding: '1rem'
                }}
            >
                <RouterProvider router={router} />
            </Box>
            <Footer />
        </Box>
    )
}

export default App