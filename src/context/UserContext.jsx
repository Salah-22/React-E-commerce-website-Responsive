import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
