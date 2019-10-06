const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})
export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})



export const userPostFetch = user => {
  return dispatch => {

    return fetch("http://localhost:3000/signup", {
      mode: 'cors',
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
      .then(resp => {
        return resp.json()})
      .then(data => {
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
      })
  }
}



export const userLoginFetch = user => {
  return dispatch => {

    return fetch("http://localhost:3000/login", {
      mode: 'cors',
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
      .then(resp => {
        return resp.json()})
      .then(data => {
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
      })
  }
}

export const getOrdersFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/Orders", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
            dispatch(loginUser(data.user))
        })
    }
  }
}