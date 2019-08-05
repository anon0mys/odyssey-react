const baseUrl = process.env.REACT_APP_API_URL

export const userPostFetch = user => {
  return dispatch => {
    return fetch(baseUrl + "/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const loginPostFetch = user => {
  return dispatch => {
    return fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const logoutDeleteFetch = user => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch(baseUrl + "/logout", {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(resp => {
          if (resp.status !== 204) {
            // Here you should have logic to handle invalid creation of a user.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error with creating the user, i.e. invalid username
          } else {
            localStorage.removeItem("token")
            dispatch(logoutUser())
          }
        })
    }
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
