const initialState = {
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
      };
    default:
      return state;
  }
};
