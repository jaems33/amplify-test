import reducer from '../../redux/reducer';
import * as types from '../../redux/actionTypes';

describe('reducers', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      cart: [],
      product: {
        imageUrl: '',
        name: '',
        size: [],
        manufacturer: '',
        price: 0.0,
      },
    })
  });

  it('should handle ADD_PRODUCT', () => {

    const defaultState = {
      cart: [],
      product: {},
    }

    const product = {
      imageUrl: 'https://www.example.com/images/sample.jpg',
      name: 'Sample',
      size: ['Standard'],
      manufacturer: 'Flancrest Enterprises',
      price: 14.33
    }

    expect(reducer({ ...defaultState }, {
      type: types.ADD_PRODUCT,
      payload: product,
    })).toEqual({
      cart: [],
      product: product
    })

  })


  it('should handle ITEM_ADDED', () => {

    const defaultState = {
      cart: [],
      product: {},
    }

    const cartProduct = {
      name: 'Sample',
      size: 'Medium',
      quantity: 10
    }

    expect(reducer({ ...defaultState }, {
      type: types.ITEM_ADDED,
      payload: {
        ...cartProduct
      }
    })).toEqual({
      cart: [{
        ...cartProduct
      }],
      product: {}
    })

  })

  it('should handle ITEM_MODIFIED', () => {

    const defaultState = {
      cart: [{
        name: 'Sample',
        size: 'Medium',
        quantity: 12
      }],
      product: {},
    }

    expect(reducer({ ...defaultState }, {
      type: types.ITEM_MODIFIED,
      payload: {
        name: 'Sample',
        size: 'Medium',
        quantity: 16
      }
    })).toEqual({
      cart: [{
        name: 'Sample',
        size: 'Medium',
        quantity: 16
      }],
      product: {}
    })

  })

  it('should handle ITEM_REMOVED', () => {

    const defaultState = {
      cart: [{
        name: 'Sample',
        size: 'Medium',
        quantity: 10
      }],
      product: {},
    }

    expect(reducer({ ...defaultState }, {
      type: types.ITEM_REMOVED,
      payload: {
        name: 'Sample',
        size: 'Medium',
      }
    })).toEqual({
      cart: [],
      product: {}
    })

  })


});