async function fetchUser() {
  try {
    const res = await fetch('http://localhost:7890/api/v1/users/me/', {
      credentials: 'include',
    });
    if (res.statusCode >= 400) {
      return {};
    }
    const user = await res.json();
    return user;
  } catch (e) {
    return {};
  }
}

async function logIn() {
  window.location.assign(`${process.env.URL}/api/v1/users/login`);
}

async function logOut() {
  const res = await request
    .delete(`${process.env.URL}/api/v1/users/sessions`)
    .withCredentials();
  setUser({});
}

export { fetchUser, logIn, logOut };
