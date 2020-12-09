import React from 'react';
import Image from './Image';

const ImageButton: React.FunctionComponent<any> = (props: any) => {
  return (
    <button className={`button button--image ${props.className}`} onClick={props.callback} type="button">
      <Image imgUrl={props.imgUrl} altText={props.text} />
    </button>
  )
}

export default ImageButton;