export const storeAuthToken = token => {
  sessionStorage.setItem('auth_token', token);
};

export const getAuthToken = () => sessionStorage.getItem('auth_token');

export const deleteAuthToken = () => {
  sessionStorage.removeItem('auth_token');
};
