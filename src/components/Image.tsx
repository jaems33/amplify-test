import React, { useState } from 'react'

interface IProps {
  imgUrl: string;
  altText: string;
}

const Image: React.FunctionComponent<IProps> = ({ imgUrl, altText }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="imgContainer">
      <img className={imageLoaded ? "" : "img--hide"} src={imgUrl} alt={altText} onLoad={() => setImageLoaded(true)} />
      <img className={imageLoaded ? "img--hide" : ""} src={"./default.png"} alt="Default" />
    </div>)
}

export default Image;