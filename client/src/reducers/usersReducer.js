const initialState = {
    currentUser: {},
    orders: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return { ...state, currentUser: action.payload }
        case 'LOGOUT_USER':
            return { ...state, currentUser: {} }
        case 'FETCH_ORDERS':
            return { ...state, orders: action.payload }
        case "ADD_ORDER":
            return {...state, orders: [...state.orders, action.payload]}
        default:
            return state;

    }
}

export default usersReducer