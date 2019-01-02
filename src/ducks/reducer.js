const INITIAL_STATE = {
  username: "",
  profile_pic: "",
  id: ""
};

const SET_USER = "SET_USER";
const CLEAR_USER = "CLEAR_USER";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      // return { ...state, ...action.payload };
      console.log(`SET_USER dispatching, action.payload`, action.payload);
      return Object.assign({}, state, action.payload);

    case CLEAR_USER:
      return { ...state, username: "", profile_pic: "", id: "" };
    // return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}

export function setUser(user) {
  console.log(`setUser action called, user`, user);
  return {
    type: SET_USER,
    payload: user
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER
  };
}
