import React, { useState } from "react";
import IconDescription from "../../data/IconDescription";

function HomeSection2() {
  const [data, setData] = useState(IconDescription);

  return (
    <div className="section-2">
      <div className="left-col">
        {data.slice(0,3).map((values, i) => {
          const { id, iconImage, title, text } = values;

          return (
            <div key = {i}
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              className={`row-${id}`}
            >
              <div className="icon-content">
                <div className="right-icon-text">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <div className="icon">
                  <img src={iconImage} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="center-col">
        <img src='./images/product-img-1.png' alt="" />
      </div>

      <div className="right-col">
        {data.map((values, i) => {
          const { id, title, text, iconImage } = values;

          return (
            <div key = {i}
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              className={`row-${id}`}
            >
              <div className="icon-content">
                <div className="icon">
                  <img src={iconImage} alt="" />
                </div>
                <div className="left-icon-text">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeSection2;
