import { createContext, useState, ReactNode } from "react";

interface AppContextProps {
  calledBalls: number[];
  setCalledBalls: (balls: number[]) => void;
  enabledLetters: string[];
  setEnabledLetters: (letters: string[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [calledBalls, setCalledBalls] = useState<number[]>([]);
  const [enabledLetters, setEnabledLetters] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{
        calledBalls,
        setCalledBalls,
        enabledLetters,
        setEnabledLetters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
