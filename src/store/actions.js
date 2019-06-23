export const logOutUser = () => {
  return {
    type: "LOG_OUT",
    payload: null
  };
};

export const logIn = user => {
  return {
    type: "LOG_IN",
    payload: user
  };
};

//Thunk Creators
//sign up a new user
export const createUser = user => {
  return function thunk(dispatch) {
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {

          password: userInfo.signupPassword,
          email: userInfo.email,
          avatar: userInfo.avatar,
          name: userInfo.name
        }
      })
    })
      .then(r => r.json())
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.jwt);
        dispatch(logIn(res.user));
      })
      .catch(console.error);
  };
  //create the user with fetch
  //then log in that user
};

export const logInUser = user => {
  return function thunk(dispatch) {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: userInfo.email,
          password: userInfo.loginPassword
        }
      })
    })
      .then(r => r.json())
      .then(res => {
        localStorage.setItem("token", res.jwt);
        dispatch(logIn(res.user));
      });
  };
};
