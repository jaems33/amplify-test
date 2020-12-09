import React from 'react'

interface IButton {
  text: string;
  callback: Function;
  className?: string;
}

const Button: React.FunctionComponent<IButton> = ({text, callback, className=""}) => {

  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    callback();
  }
  return (<button className={`button ${className}`} type="button" onClick={(event: React.MouseEvent) => onClick(event)}>{text}</button>);
}

export default Button;