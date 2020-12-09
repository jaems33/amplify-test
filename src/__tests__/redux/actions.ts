import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';

describe('actions', () => {

  it('should create an action to add a product to the catalog', () => {
    const product = {
      imageUrl: 'https://www.example.com/images/sample.jpg',
      name: 'Sample',
      size: ['Standard'],
      manufacturer: 'Flancrest Enterprises',
      price: 14.33
    }
    const expectedAction = {
      type: types.ADD_PRODUCT,
      payload: product
    }
    expect(actions.addProduct(product)).toEqual(expectedAction);
  });

  it('should create an action to add an item to cart', () => {
    const product = {
      name: 'Tiles',
      size: 'Large',
      quantity: 8
    }
    const expectedAction = {
      type: types.ITEM_ADDED,
      payload: {
        name: product.name,
        size: product.size,
        quantity: product.quantity
      }
    }
    expect(actions.addToCart(product.name, product.size, product.quantity)).toEqual(expectedAction);
  });

  it('should create an action to remove an item from cart', () => {
    const product = {
      name: 'Tiles',
      size: 'Large',
    }
    const expectedAction = {
      type: types.ITEM_REMOVED,
      payload: {
        name: product.name,
        size: product.size,
      }
    }
    expect(actions.removeFromCart(product.name, product.size)).toEqual(expectedAction);
  });

  it('should create an action to edit an item in cart', () => {
    const product = {
      name: 'Tiles',
      size: 'Large',
      quantity: 20
    }
    const expectedAction = {
      type: types.ITEM_MODIFIED,
      payload: {
        name: product.name,
        size: product.size,
        quantity: product.quantity,
      }
    }
    expect(actions.editCart(product.name, product.size, product.quantity)).toEqual(expectedAction);
  });
});