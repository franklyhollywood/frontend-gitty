import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';

export default function Header() {
  const { user, getUser, login, logout } = useUser();
  let history = useHistory();

  return (
    <>
      {user.id ? (
        <button onClick={logout}>log out</button>
      ) : (
        <button onClick={login}>Log in with Github</button>
      )}
    </>
  );
}
