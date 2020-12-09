import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import Carousel from '../../components/Carousel';

describe('<Carousel>', () => {

  it('should switch images when thumbnails are clicked', () => {

    const images = [
      {
        imgUrl: 'images/image1.jpg',
        text: 'image1'
      },
      {
        imgUrl: 'images/image2.jpg',
        text: 'image2'
      },
      {
        imgUrl: 'images/image3.jpg',
        text: 'image3'
      },
    ]

    const {getByAltText, queryAllByAltText} = render(<Carousel images={images} />);
    expect(queryAllByAltText(/image1/i)).toHaveLength(2);
    expect(queryAllByAltText(/image2/i)).toHaveLength(1);
    fireEvent.click(getByAltText(/image2/i));
    expect(queryAllByAltText(/image2/i)).toHaveLength(2);
    expect(queryAllByAltText(/image1/i)).toHaveLength(1);
  });

  it('should not show thumbnails if only one image exist', () => {
    const {queryAllByAltText} = render(<Carousel images={[{
      imgUrl: 'images/image1.jpg',
      text: 'image1'
    }]} />);
    expect(queryAllByAltText(/image1/i)).toHaveLength(1);
  });

  
});