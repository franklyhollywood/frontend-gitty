//Login button if not logged in / logout button if logged in
// create logged in and logged out buttons
import { useHistory } from 'react-router-dom';
import request from 'superagent';
import { useUser } from '../context/UserContext.js';
// import { useState, useEffect } from 'react';

export default function Header() {
  const { user, setUser } = useUser();
  let history = useHistory();

  async function handleLogin() {
    console.log('SOMETHING');
    window.location.assign(`${process.env.URL}/api/v1/users/login`);
    const res = await request
      .get('http://localhost:7890/api/v1/users/user')
      .withCredentials();
    setUser(res.body);
  }

  async function handleLogOut() {
    const res = await request
      .delete(`${process.env.URL}/api/v1/users/sessions`)
      .withCredentials();
    setUser({});
    history.push('/');
  }

  return (
    <>
      {user.id ? (
        <button onClick={handleLogOut}>log out</button>
      ) : (
        <button onClick={handleLogin}>Log in with Github</button>
      )}
    </>
  );
}
