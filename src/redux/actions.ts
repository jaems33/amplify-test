import * as actions from './actionTypes'

export const addToCart = (name: string, size: string, quantity: number) => ({
  type: actions.ITEM_ADDED,
  payload: {
    name,
    size,
    quantity
  }
});

export const editCart = (name: string, size: string, quantity: number) => ({
  type: actions.ITEM_MODIFIED,
  payload: {
    name,
    size,
    quantity,
  }
});

export const removeFromCart = (name: string, size: string) => ({
  type: actions.ITEM_REMOVED,
  payload: {
    name,
    size,
  }
});

export const addProduct = (product: any) => ({
  type: actions.ADD_PRODUCT,
  payload: product
});
