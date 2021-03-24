import React from "react";
import Header from "../Header/header";
import LogoImage from "../LogoImage/logoImage";
function ResourceItem({ tag, header, img, width, height, alt }) {
  return (
    <React.Fragment>
      <Header Tag={tag} text={header} />
      <div className="row">
        <div className="col text-center">
          <LogoImage imageName={img} width={width} height={height} alt={alt} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResourceItem;
