const initState = {
    cartProducts:[],
    total: 0
}

const cartReducer = (state = initState, action) => {
    // debugger
    //INSIDE HOME COMPONENT
    if (action.type === "ADD_TO_CART") {

        //check if the action id exists in the cartProducts
        let product = state.cartProducts.find(cartProduct => cartProduct.id === action.product.id)
        if (product) {
            product.quantity += 1
            return {
                ...state,
                total: state.total + product.price
            }
        }
        else {
            product = action.product
            product.quantity = 1;
            //calculating the total
            let newTotal = state.total + product.price

            return {
                ...state,
                cartProducts: [...state.cartProducts, product],
                total: newTotal
            }

        }
    }
    if (action.type === "REMOVE_PRODUCT") {
        let productToRemove = state.cartProducts.find(product => action.id === product.id)
        let new_products = state.cartProducts.filter(product => action.id !== product.id)

        //calculating the total
        let newTotal = state.total - (productToRemove.price * productToRemove.quantity)
        console.log(productToRemove)
        return {
            ...state,
            cartProducts: new_products,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === "ADD_QUANTITY") {
        let cartProduct = state.products.find(product => product.id === action.id)
        cartProduct.quantity += 1
        let newTotal = state.total + cartProduct.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === "SUBTRACT_QUANTITY") {
        let cartProduct = state.products.find(product => product.id === action.id)
        //if the qt == 0 then it should be removed
        if (cartProduct.quantity === 1) {
            let new_products = state.cartProductss.filter(product => product.id !== action.id)
            let newTotal = state.total - cartProduct.price
            return {
                ...state,
                cartProducts: new_products,
                total: newTotal
            }
        }
        else {
            cartProduct.quantity -= 1
            let newTotal = state.total - cartProduct.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    else {
        return state
    }

}

export default cartReducer