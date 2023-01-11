import React, {
  useState,
  createContext,
  useContext,
  ReactElement,
  ReactNode,
} from "react";

interface DarkModeContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<DarkModeContext | undefined>(
  undefined
);
DarkModeContext.displayName = "DarkModeContext";

const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

  const value = { darkMode, setDarkMode };
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error(`useDarkMode must be used within a DarkModeContext`);
  }
  return context;
}

export { DarkModeContextProvider, useDarkMode };
