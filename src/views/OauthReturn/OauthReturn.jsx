import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { fetchUser } from '../../services/users.js';

//Once Oauth completes the user will be redirected to this page:
export default function OauthReturn() {
  let history = useHistory();
  const { setUser } = useUser();
  useEffect(() => {
    const user = async () => {
      const user = await fetchUser();
      setUser(user);
      history.push('/tweets');
    };
    user();
  }, []);

  return <div>User</div>;
}
