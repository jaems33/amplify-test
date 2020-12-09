import React, {useState} from 'react';
import Image from './Image'
import ImageButton from './ImageButton'

const Carousel: React.FunctionComponent<any> = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClick = (index: number) => {
    setSelectedIndex(index);
  }
  
  if (props.images.length === 0) return (<></>);

  return (
    <div>
      <div className="carousel-image">
        <Image imgUrl={props.images[selectedIndex].url} altText={props.images[selectedIndex].text} />
      </div>
      {
        props.images.length > 1 ?
          props.images.map( (element: any, index: number) => {
            return <ImageButton
              key={index}
              className={index === selectedIndex ? "selected square" : "square"} 
              imgUrl={element.url} 
              altText={element.text} 
              callback={() => onClick(index)}  
            />
          })
        : <></>
      }
    </div>
  );
}

export default Carousel;