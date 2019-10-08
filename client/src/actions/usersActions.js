const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})
export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const fetchOrders = (orders) => ({
  type: 'FETCH_ORDERS',
  payload: orders
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
      return fetch("http://localhost:3000/orders", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
        .then(resp => resp.json())
        .then(data => {
            dispatch(fetchOrders(data))
        })
    }
  }
}

export const placeOrdersFetch = (products) => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({products})
      })
        .then(resp => resp.json())
        .then( () => getOrdersFetch())
    }
}