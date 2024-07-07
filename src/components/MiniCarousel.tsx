import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/minicarousel.css";
import arrow from "../assets/images/Group 9275.png";

const MiniCarousel = () => {
  const [count, setCount] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<any>(null);
  const ref = useRef<any>(null);

  const btnpressprev = () => {
    ref.current.scrollLeft = ref.current.scrollLeft - 420;
  };

  const btnpressnext = () => {
    ref.current.scrollLeft = ref.current.scrollLeft + 420;
  };

  useEffect(() => {
    setTimeout(() => {
      if (count === 6) {
        ref.current.scrollLeft = 0;
      } else {
        btnpressnext();
      }
    }, 2000);
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count + 1) % 7);
    }, 2000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, [count, 7]);

  return (
    <div className="product-carousel">
      <div className="product-container" ref={ref}>
        {Array.from(Array(7).keys()).map((v, i) => {
          return (
            <div className="minicaraousel" key={i}>
              <div className="minicaraousel-content">
                <h4>Lorem ipsum {i + 1}</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>

                <div className="minicaraousel-btn">
                  <span>Know more</span>

                  <img src={arrow} alt="" style={{ height: "24px" }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiniCarousel;
