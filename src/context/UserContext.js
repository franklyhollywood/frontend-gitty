import { createContext, useContext, useEffect, useState } from 'react';
import { fetchUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = fetchUser();
  const [userPromise, setUserPromise] = useState(
    new Promise((resolve, reject) => {
      fetchUser()
        .then((user) => {
          resolve(user);
        })
        .catch((e) => reject(e));
    })
  );
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  async function getUser() {
    return await userPromise;
  }
  const value = { getUser: userPromise, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserContext, UserProvider, useUser };
