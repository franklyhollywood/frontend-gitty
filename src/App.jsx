import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Header from './components/header';
import Tweets from './views/Tweets/Tweets.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Tweets />
      </Router>
    </div>
  );
}

export default App;
