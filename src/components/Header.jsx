//Login button if not logged in / logout button if logged in
// create logged in and logged out buttons
import request from 'superagent';

export default function Header() {
  async function handleLogin() {
    console.log('SOMETHING');
    window.location.assign(`${process.env.URL}/api/v1/users/login`);
  }

  async function handleLogOut() {
    const res = await request
      .delete(`${process.env.URL}/api/v1/users/sessions`)
      .withCredentials();
    console.log(res);
  }

  return (
    <>
      <button onClick={handleLogin}>Log in with Github</button>
      <button onClick={handleLogOut}>log out</button>
    </>
  );
}
