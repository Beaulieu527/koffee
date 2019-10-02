
export function fetchProducts() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_PRODUCTS' });
        return fetch('http://localhost:3000/products.json')
            .then(response => {
                return response.json()
            }).then(responseJSON => {
                dispatch({ type: "FETCH_PRODUCTS", payload: responseJSON })
            })
    };
}