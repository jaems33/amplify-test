import * as actions from './actionTypes';

const defaultState = {
  cart: [],
  product: {
    imageUrl:'',
    name: '',
    size:[],
    manufacturer: '',
    price : 0.0,
  },
}

export default function reducer(state: any = defaultState, action: any) {
  switch(action.type) {
    case actions.ITEM_ADDED: {
      const {name, size, quantity} = action.payload;
      return {
        ...state,
        cart: [
          ...state.cart,
          {name, size, quantity}
        ]
      }
    }
    case actions.ITEM_MODIFIED: {
      const {name, size, quantity} = action.payload;
      return {
        ...state,
        cart: state.cart.map( (item: any) => {
            if (item.name === name && item.size === size){
              return {
                name, 
                size, 
                quantity
              }
            }
            return item;
          })
      }
    }
    case actions.ITEM_REMOVED: {
      const {name, size} = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.name !== name || item.size !== size)
      }
    }
    case actions.ADD_PRODUCT: 
      const product = action.payload; 
      return {
        ...state,
        product: product
      }
    default:
      return state;
  }
}