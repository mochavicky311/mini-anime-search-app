import { grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
    palette: {
        primary: {
            main: "#FE7743",
            light: "#fe9268",
            dark: "#b1532e",
            contrastText: "#fff",
        },
        secondary: {
            main: "#273F4F",
            light: "#526572",
            dark: "#1b2c37",
            contrastText: "#fff",
        },
        error: {
            main: red[500],
        },
        warning: {
            main: "#FFA726",
        },
        info: {
            main: "#29B6F6",
        },
        success: {
            main: "#66BB6A",
        },
        background: {
            default: "#fff",
            paper: grey[100],
        },
        text: {
            primary: grey[900],
            secondary: grey[600],
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 500,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 500,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 500,
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 500,
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 400,
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 400,
        },
        body1: {
            fontSize: "1rem",
        },
        body2: {
            fontSize: "0.875rem",
        },
        button: {
            textTransform: "none",
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 4,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: "none",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: "16px",
                },
            },
        },
    },
});