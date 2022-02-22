import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/header';
import PrivateRoute from './components/PrivateRoute.jsx';
import { UserProvider } from './context/UserContext.js';
import Home from './views/Home/Home.jsx';
import Tweets from './views/Tweets/Tweets.jsx';
import OauthReturn from './views/OauthReturn/OauthReturn.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/tweets">
            <Tweets />
          </PrivateRoute>
          <Route path="/oauthreturn">
            <OauthReturn />
          </Route>
        </Switch>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
