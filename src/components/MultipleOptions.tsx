import React from 'react';
import Button from './Button'
import {nanoid} from 'nanoid';

const MultipleOptions: React.FunctionComponent<any> = ({options, callback}) => {
  const onButtonPress = (value: any) => {
    callback(value);
  }
  return (
    <div>
      {
        options.map((element: any) => {
          return <Button key={nanoid()} callback={() => onButtonPress(element)} text={element} />
        })
      }
    </div>
  )
}

export default MultipleOptions;