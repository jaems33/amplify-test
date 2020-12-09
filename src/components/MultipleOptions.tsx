import React, {useState} from 'react';
import Button from './Button'
import {nanoid} from 'nanoid';

const MultipleOptions: React.FunctionComponent<any> = ({options, callback}) => {
  const [active, setActive] = useState(0);
  const onButtonPress = (value: any, index: number) => {
    setActive(index);
    callback(value);
  }
  return (
    <div className="buttonlist">
      {
        options.map((element: any, index: number) => {
          let className = '';
          if (index === active){
            className = 'selected';
          }
          return <Button className={`button--standard button--outline ${className}`} key={nanoid()} callback={() => onButtonPress(element, index)} text={element} />
        })
      }
    </div>
  )
}

export default MultipleOptions;