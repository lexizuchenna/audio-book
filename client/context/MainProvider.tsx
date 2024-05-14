import { useContext, createContext, ReactNode, useState } from "react";

const Context = createContext({});

interface Props {
  children: ReactNode;
}

export default function MainProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMainContext = () => useContext(Context);
