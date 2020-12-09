import React from 'react';
import { render, fireEvent, screen} from '../../redux/_utils';
import Product from '../../pages/Product';

describe('<Product>', () => {

  const product = {
    imageUrl:'https://www.linkpicture.com/q/LPic5f7f90d59df81380277299.jpg',
    name: 'White Brick',
    size:['Modular','Queen','Max'],
    manufacturer: 'Meridian',
    price : 2.00,
  }

  it('should allow adding different sizes to the cart', () => {
    const {getByText} = render(<Product product={product} images={[product.imageUrl]} />, { initialState: {
      product: product,
      cart: []
    }});
    expect(screen.getByText(/White Brick/i)).toBeInTheDocument();
    fireEvent.click(getByText(/\+/i));
    fireEvent.click(getByText(/Add to Cart/i));
    expect(screen.getByText(/4.00/i)).toBeInTheDocument();

    fireEvent.click(getByText(/Queen/i));
    fireEvent.click(getByText(/\+/i));
    fireEvent.click(getByText(/\+/i));
    fireEvent.click(getByText(/\+/i));
    fireEvent.click(getByText(/\+/i));
    fireEvent.click(getByText(/Add to Cart/i));
    expect(screen.getByText(/10.00/i)).toBeInTheDocument();

    fireEvent.click(getByText(/Modular/i));
    expect(screen.getByText(/4.00/i)).toBeInTheDocument();
  });

  
});