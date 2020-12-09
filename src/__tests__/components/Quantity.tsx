import React from 'react';
import Quantity from '../../components/Quantity';
import { render, fireEvent, screen} from '../../redux/_utils'

describe('<Quantity>', () => {

  it('should increase the quantity when the plus is pressed', () => {
    const sizes = ["Medium"];
    const {getByText} = render(<Quantity name="White Tile" size={sizes} />, { initialState: {
      product: {
        name: "White Tile",
        size: ["Medium", "Large"]
      },
      cart: []
    }});
    fireEvent.click(getByText(/\+/i));
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });

  it('should decrease the quantity when the negative is pressed', () => {
    const {getByText} = render(<Quantity name="White Tile" size="Medium" />, { initialState: {
      product: {
        name: "White Tile",
        size: ["Medium", "Large"]
      },
      cart: [
        {
          name: "White Tile",
          size: "Medium",
          quantity: 3
        }
      ]
    }});
    fireEvent.click(getByText(/-/i));
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    fireEvent.click(getByText(/-/i));
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    fireEvent.click(getByText(/-/i));
    expect(screen.getByText(/0/i)).toBeInTheDocument();
    fireEvent.click(getByText(/-/i));
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });


  
});