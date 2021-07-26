import { ReactNode, useState } from 'react';
import { createContext } from 'react';

interface AppProviderProps {
    children: ReactNode
}

interface AppContextProps {
    isDark: boolean;
    isDarkTheme: () => void;
    modo: boolean;
    setModo: any;
}

export const AppContext = createContext({} as AppContextProps)

export function AppProvider({ children }: AppProviderProps) {
    const [modo, setModo] = useState(false)
    const [isDark, setIsDark] = useState(false)

    function isDarkTheme() {
        setIsDark(!isDark)
    }


    return (
        <AppContext.Provider value={{
            isDark,
            isDarkTheme,
            modo,
            setModo
        }}>
            {children}
        </AppContext.Provider>
    )
}