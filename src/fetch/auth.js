export function signUp(name, email, password) {
  return fetch('/api/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(response => { return response; })
    .catch(err => err);
}
