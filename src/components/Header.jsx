import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { logIn, logOut } from '../services/users.js';

export default function Header() {
  const { getUser } = useUser();
  let history = useHistory();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      getUser.then((user) => {
        setUser(user);
      });
    })();
  }, []);

  useEffect(() => {
    setIsLoading(user?.id !== undefined);
  }, [user]);

  async function handleLogOut() {
    await logOut();
    history.push('/');
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        {user.id ? (
          <button onClick={handleLogOut}>log out</button>
        ) : (
          <button onClick={logIn}>Log in with Github</button>
        )}
      </>
    );
  }
}
