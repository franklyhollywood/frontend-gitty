import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { getUser } from '../../services/users.js';

export default function User() {
  let history = useHistory();
  const { setUser } = useUser();
  useEffect(() => {
    const user = async () => {
      const user = await getUser();
      setUser(user);
      history.push('/');
    };
    user();
  }, []);

  return <div>User</div>;
}
