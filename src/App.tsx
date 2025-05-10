import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Box from '@mui/material/Box';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appTheme } from './themes/theme';

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
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
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
        </ThemeProvider>
    )
}

export default App