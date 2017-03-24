export function signUp(name, email, password) {
  return fetch('/api/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then(response => response);
}

export function authenticate(email, password) {
  return fetch('/api/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'WWW-Authenticate': 'Bearer'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response);
}
