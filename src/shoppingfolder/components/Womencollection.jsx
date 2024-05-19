import React from "react";

const Womencollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.girlsFashion;

  return (
    <div class="girlsFashion">
      <img
        class="bannerimg"
        src="assets/LadiesBanner.gif"
        alt="Ladies Banner"
      />
      <h2>{title}</h2>
      <div className="menImages">
        <img className="menimg" src={image1} alt={title} />
        <img className="menimg" src={image2} alt={title} />
        <img className="menimg" src={image3} alt={title} />
        <img className="menimg" src={image4} alt={title} />
        <img className="menimg" src={image5} alt={title} />
        <img className="menimg" src={image6} alt={title} />
      </div>
    </div>
  );
};

export default Womencollection;
