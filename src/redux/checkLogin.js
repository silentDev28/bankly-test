const InitState = {
  isLogedIn: false,
};
const isLoginReducer = (state = InitState, action) => {
  switch (action.type) {
    case "login_checked":
      return {
        isLogedIn: action.data,
      };

    default:
      return state;
  }
};
export default isLoginReducer;
