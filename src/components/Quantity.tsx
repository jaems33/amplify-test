import React, {useState, useEffect} from 'react';
import Button from './Button';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, editCart, removeFromCart} from '../redux/actions'

const Quantity: React.FunctionComponent<any> = ({name, size}) => {

  // Redux
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  
  // Check if item is already in cart
  const itemInCart = cart.filter((element: any) => element.name === name && element.size === size)[0];
  const [quantity, setQuantity] = useState(1);
  const decreaseQty = () => {
    if (quantity > 0){
      setQuantity(quantity - 1);
    }
  }
  const increaseQty = () => {
    setQuantity(quantity + 1);
  }

  const modifyCart = () => {
    if (itemInCart && quantity > 0){
      dispatch(editCart(name, size, quantity));
    } else if (itemInCart){
      dispatch(removeFromCart(name, size));
    } else {
      dispatch(addToCart(name, size, quantity));
    }
  }

  let buttonText;
  if (itemInCart && (quantity === itemInCart.quantity)){
    buttonText = `${quantity} in Cart`
  } else if (itemInCart && (quantity === 0)){
    buttonText = "Remove from Cart";
  } else if (itemInCart){
    buttonText = "Update quantity";
  } else {
    buttonText = "Add to Cart";
  }

  useEffect(() => {
    setQuantity(itemInCart ? itemInCart.quantity : 1);
  }, [itemInCart])
  
  return(
    <form>
      <Button text="-" callback={decreaseQty} />
      <span className="inner_text">{quantity}</span>
      <Button text="+" callback={increaseQty} />
      <Button className="button--addToCart" text={buttonText} callback={modifyCart} />
    </form>
  )
}

export default Quantity;