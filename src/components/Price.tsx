import React from 'react'
import { currencyFormatter } from '../helpers/currency';
import {useSelector} from 'react-redux';

const Price: React.FunctionComponent<any> = (props) => {
  const priceAsString = currencyFormatter.format(props.price);
  const cart = useSelector((state: any) => state.cart);

  const itemInCart = cart.filter((element: any) => element.name === props.name && element.size === props.size)[0];
  let total = itemInCart ? <div>Total: {currencyFormatter.format(itemInCart.quantity * props.price)}</div> : <></>;

  return (<div>
      <div>Unit Price: {priceAsString}</div>
      {total}
    </div>
  )
};

export default Price;