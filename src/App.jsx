import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/header';
import PrivateRoute from './components/PrivateRoute.jsx';
import { UserProvider } from './context/UserContext.js';
import Tweets from './views/Tweets/Tweets.jsx';
import User from './views/User/User.jsx';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"></Route>
            <PrivateRoute exact path="/tweets">
              <Tweets />
            </PrivateRoute>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
