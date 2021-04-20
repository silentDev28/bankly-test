const InitState = {
  userCredentials: {
    firstname: "taheed24",
    lastname: "ogundeyi",
    email: "ogundeyitaoheed@gmail.com",
    phoneNumber: "08133090847",
    password: "12345",
  },
};
const userReducer = (state = InitState, action) => {
  switch (action.type) {
    case "user_data":
      return {
        userCredentials: action.data,
      };

    default:
      return state;
  }
};
export default userReducer;
