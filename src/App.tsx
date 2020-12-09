import React, { useEffect, useState } from 'react';
import Product from './pages/Product';
import Navigation from './pages/Navigation';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from './redux/actions';

const App: React.FunctionComponent<any> = () => {

  const dispatch = useDispatch();
  const product = useSelector((state: any) => state.product);
  const [images, setImages] = useState([] as any);

  // After component loads, populate store
  useEffect (() => {
    const defaultProduct = {
      imageUrl:'https://www.linkpicture.com/q/LPic5f7f90d59df81380277299.jpg',
      name: 'White Brick',
      size:['Modular','Queen','Max'],
      manufacturer: 'Meridian',
      price : 5.0,
    };
    dispatch(addProduct(defaultProduct));

    const name = defaultProduct.name;
    setImages([
      {url: defaultProduct.imageUrl, altText: defaultProduct.name},
      {url: './images/image1.jpg', altText: name},
      {url: './images/image2.jpg', altText: name},
      {url: './images/image3.jpg', altText: name},
      {url: './images/image4.jpg', altText: name},
    ]);
  }, []);


  return (
      <div className="App">
        <Navigation />
        <Product product={product} images={images} />
      </div>
  );
}

export default App;
