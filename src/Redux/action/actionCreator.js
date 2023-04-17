const setUser = (user) => {
  return {
    type: 'LOGIN',
    payload: user.username,
  };
};

export default setUser;
