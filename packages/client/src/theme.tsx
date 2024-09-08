import {useMediaQuery} from "@mui/material";
import {createTheme, StyledEngineProvider, ThemeProvider} from "@mui/material/styles";
import {createContext, ReactNode, useMemo, useState} from "react";

type ThemeContextType = {
	switchColorMode: () => void;
	isMobile: boolean;
};

type ThemeContextProviderProps = {
	children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
	switchColorMode: () => {},
	isMobile: false,
});

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [mode, setMode] = useState<"dark" | "light">("dark");

    const isMobile = useMediaQuery("(max-width:600px)");

    const switchColorMode = () => {
        setMode(prevMode => (prevMode === "dark" ? "light" : "dark"));
    };

    const theme = useMemo(() => createTheme({
        typography: {
            fontFamily: ["Chakra Petch", "sans-serif"].join(",")
        }, palette: {
            mode, ...(mode === "dark" ? {
                    primary: {
                        main: "rgba(49,218,202,0.92)", light: "rgba(48, 131, 191, 1)"
                    }
                } : {
                    primary: {
                        main: '#3f51b5',
                    }
                })
        },

        components: {
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        color: mode === "dark" ? "#eeeeee" : "#121017"
                    }
                }
            }, MuiTypography: {
                styleOverrides: {
                    root: {
                        color: mode === "dark" ? "#eeeeee" : "#121017"
                    }
                }
            }, MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 10,
                    }
                }
            },
            MuiPaper: {
                styleOverrides : {
                    root: {
                        borderRadius: 10,
                        padding: 20,
                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)"
                    }
                }
            },


            MuiTextField: {
                styleOverrides: {
                    root: {
                        borderRadius: 10
                    }
                }
            }, MuiIconButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 10
                    },
                },
            },

            MuiSelect: {
                styleOverrides: {
                    root: {
                        borderRadius: 10
                    }
                }
            }
        }
    }), [mode]);

    return (<StyledEngineProvider injectFirst>
            <ThemeContext.Provider value={{switchColorMode, isMobile}}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </ThemeContext.Provider>
        </StyledEngineProvider>);
}
