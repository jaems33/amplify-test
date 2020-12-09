import React, { useEffect, useState } from 'react';
import Quantity from '../components/Quantity';
import MultipleOptions from '../components/MultipleOptions';
import Review from '../components/Review';
import Carousel from '../components/Carousel';
import Price from '../components/Price';

const Product: React.FunctionComponent<any> = (props) => {

  const { name, manufacturer, price, size } = props.product;
  const [selectedSize, setSelectedSize] = useState(size ? size[0] : '');

  // When size is loaded, update the selected size
  useEffect(() => {
    if (size) {
      setSelectedSize(size[0]);
    }
  }, [size]);

  /* Size */
  const changeSize = (input: string) => {
    setSelectedSize(input);
  }

  if (props.name === '') {
    return <></>
  }

  return (<section className="page">
    <div className="grid">
      <div className="grid__element">
        <div className="grid__content">
          <Carousel images={props.images} />
        </div>
      </div>
      <div className="grid__element">
        <div className="grid__content">
          <span className="h2 spacing--s">{name}</span>
          <span className="h3 spacing--m">By {manufacturer}</span>
          <div className="spacing--m bordered">
            <MultipleOptions options={size} callback={changeSize} />
          </div>
          <div className="spacing--m bordered">
            <Quantity name={name} size={selectedSize} />
          </div>
          <div className="spacing--m">
            <Price name={name} size={selectedSize} price={price} />
          </div>
        </div>
      </div>
      <div className="grid__element">
        <div className="grid__content">      
        <div className="spacing--m bordered">
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
      </div>
    </div>
    </div>
  </section>
  );
}

export default Product;