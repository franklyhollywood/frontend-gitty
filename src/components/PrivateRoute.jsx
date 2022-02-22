import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const a = useUser();
  console.log(a);
  const user = a.user;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.id ? (
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
