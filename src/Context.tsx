import { ReactNode, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider(props: { theme: Theme; children: ReactNode }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const theme = useContext(ThemeContext);

    if (theme === null) {
        throw new Error('useTheme must be used within ThemeProvider');
    }

    return theme;
}
