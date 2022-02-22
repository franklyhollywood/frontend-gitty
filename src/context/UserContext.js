import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchUser } from '../services/users';
const request = require('superagent');

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const fetchedUser = await fetchUser();
      console.log(fetchedUser);
      if(!!fetchedUser?.id) {
        setUser(fetchedUser);
      }
      setLoading(false);
    })();
  }, []);

  async function login() {
    window.location.assign(`${process.env.URL}/api/v1/github/login`);
  }
  
  async function logout() {
    const res = await request
      .delete(`${process.env.URL}/api/v1/github/sessions`)
      .withCredentials();
    setUser({});
    history.push('/');
  }

  const value = useMemo(() => ({user, setUser, login, logout}), [user]);

  if(loading) {
    return <UserContext.Provider value={value}>Loading...</UserContext.Provider>;
  } else {
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  }
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserContext, UserProvider, useUser };
