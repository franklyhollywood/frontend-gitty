// // gets all tweets and displays them for that user.
// // form, submit button, logout button, delete button for each tweet

import { useState, useEffect } from 'react';
import request from 'superagent';
import { useUser } from '../../context/UserContext.js';

export default function Tweets() {
  const [tweets, setTweets] = useState();
  const { user } = useUser();
  async function getAllTweets() {
    //get tweets from db.
    const res = await request
      .get('http://localhost:7890/api/v1/posts')
      .withCredentials();
    console.log(res.body);
    setTweets(res.body);
    //need state that holds the tweets
    //display on page
  }

  useEffect(() => {
    getAllTweets();
  }, []);

  return <div>Tweets View Page</div>;
}

// import { useEffect } from 'react';
// import { useCookies, CookiesProvider } from 'react-cookie';
// import request from 'superagent';

// export default function App() {
//   const cookies = useCookies();
//   console.log(cookies);

//   useEffect(() => {
//     // async function getUser() {
//     //   const user = await request.get(
//     //     `${process.env.URL}/api/v1/users/dashboard`
//     //   );
//     //   console.log(user, cookies);
//     // }
//     // getUser();
//   }, []);

//   return (
//     <>
//       <button onClick={handleLogin}>Log Into Github</button>
//     </>
//   );
// }
