import  {data} from "./../static/data"
console.log(data)
export const state = () => ({
  auth: { users: [], user: {} },
  objects:data
});

export const mutations = {
  setUser(state, e) {
    state.auth.user = { ...e, loggedIn: true };
  },
  registerUser(state, e) {
    state.auth.users.push({ ...e, loggedIn: false });
  },
  logoutUser(state, e) {
    state.auth.user.loggedIn = false;
  },
};
export const getters = {
  isAuthenticated(state) {
    return state.auth.user.loggedIn;
  },
  getObjects(state) {
    return state;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
  allRegisteredUser(state) {
    return state.auth.users;
  },
};
