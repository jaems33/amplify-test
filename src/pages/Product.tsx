import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Quantity from '../components/Quantity';
import MultipleOptions from '../components/MultipleOptions';
import Review from '../components/Review';
import Carousel from '../components/Carousel';
import Price from '../components/Price';

const Product: React.FunctionComponent<any> = (props) => {

  const { name, manufacturer, price, size } = props.product;

  /* Size */
  const changeSize = (input: string) => {
    setSelectedSize(input);
  }
  const [selectedSize, setSelectedSize] = useState('');
  
  /* When size is loaded, update the selected size */
  useEffect( () => {
    if (size[0]){
      setSelectedSize(size[0]);
    }
  }, [size]);

  return (<section>
    <Carousel images={props.images} />
    <h1>{name}</h1>
    <h3>Manufacturer: {manufacturer}</h3>
    
    <Quantity name={name} size={selectedSize} />
    <Price name={name} size={selectedSize} price={price} />
    <div>
      Sizes: 
      <MultipleOptions options={size} callback={changeSize} /> 
    </div>
    
    <div>
      <h2>Product Description</h2>
      <p>
        Integer at malesuada eros. Fusce dolor quam, pretium in leo in, placerat pulvinar ipsum.
        Donec aliquet accumsan elit sed bibendum. Suspendisse ornare imperdiet erat id imperdiet. Nulla at nunc sapien.
      </p>
      <ul>
        <li>Proin ut sapien varius, vestibulum sem non, fringilla ligula.</li>
        <li>Morbi ut nulla vulputate, tincidunt elit id, aliquam augue.</li>
        <li>Sed at leo id massa volutpat lobortis.</li>
        <li>Nam aliquet sapien auctor metus pretium, ut lacinia metus dignissim.</li>
      </ul>
    </div>
    <div>
      <h2>Reviews</h2>
      <Review
        author="John Smith"
        time="2 days ago"
        stars={4.2}
        body="Integer at malesuada eros. Fusce dolor quam, pretium in leo in, placerat pulvinar ipsum. 
          Donec aliquet accumsan elit sed bibendum. Suspendisse ornare imperdiet erat id imperdiet. Nulla at nunc sapien." />
    </div>
  </section>
  );
}

export default Product;