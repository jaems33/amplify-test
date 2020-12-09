import React from 'react';
import { render, screen} from '../../redux/_utils';
import Price from '../../components/Price';

describe('<Price>', () => {

  it('should show the unit price', () => {
    const price = 13.42;
    render(<Price price={price} name="White Tile" size="Medium" />, { initialState: {
      product: {
        name: "White Tile",
        size: ["Medium", "Large"]
      },
      cart: []
    }});
    expect(screen.getByText(/\$13.42/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Total/i)).toHaveLength(0);
  });

  it('should show the total price if the item is in the cart', () => {
    const price = 5.35;
    render(<Price price={price} name="White Tile" size="Medium" />, { initialState: {
      product: {
        name: "White Tile",
        size: ["Medium", "Large"]
      },
      cart: [
        {
          name: "White Tile",
          size: "Medium",
          quantity: 4
        }
      ]
    }});
    expect(screen.getByText(/\$21.40/i)).toBeInTheDocument();
  });


  
});