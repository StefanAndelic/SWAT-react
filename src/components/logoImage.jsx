import React from "react";

function LogoImage({ imageName, height, width, alt }) {
  return (
    <div>
      <img src={imageName} alt={alt} height={height} width={width}></img>
    </div>
  );
}

export default LogoImage;
