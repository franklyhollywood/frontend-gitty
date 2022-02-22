import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  //DYlan accepts all blame for this complicated code....
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { getUser } = useUser();
  useEffect(() => {
    (async () => {
      const user = await getUser();
      setUser(user);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
}
