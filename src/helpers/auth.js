export const storeAuthToken = token => {
  localStorage.setItem('auth_token', token);
};

export const getAuthToken = () => localStorage.getItem('auth_token');

export const deleteAuthToken = () => {
  localStorage.removeItem('auth_token');
};
