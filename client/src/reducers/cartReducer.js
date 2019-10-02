import { ADD_TO_CART,REMOVE_PRODUCT,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions.js'


const initState = {
    addedProducts:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedProduct = state.products.find(product=> product.id === action.id)
          //check if the action id exists in the addedProducts
         let existed_product= state.addedProducts.find(product=> action.id === product.id)
         if(existed_product)
         {
            addedProduct.quantity += 1 
             return{
                ...state,
                 total: state.total + addedProduct.price 
                  }
        }
         else{
            addedProduct.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedProduct.price 
            
            return{
                ...state,
                addedProducts: [...state.addedProducts, addedProduct],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_PRODUCT){
        let productToRemove= state.addedProducts.find(product=> action.id === product.id)
        let new_products = state.addedProducts.filter(product=> action.id !== product.id)
        
        //calculating the total
        let newTotal = state.total - (productToRemove.price * productToRemove.quantity )
        console.log(productToRemove)
        return{
            ...state,
            addedProducts: new_products,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedProduct = state.products.find(product=> product.id === action.id)
          addedProduct.quantity += 1 
          let newTotal = state.total + addedProduct.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedProduct = state.products.find(product=> product.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedProduct.quantity === 1){
            let new_products = state.addedProducts.filter(product=>product.id !== action.id)
            let newTotal = state.total - addedProduct.price
            return{
                ...state,
                addedProducts: new_products,
                total: newTotal
            }
        }
        else {
            addedProduct.quantity -= 1
            let newTotal = state.total - addedProduct.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

  else{
    return state
    }
    
}

export default cartReducer