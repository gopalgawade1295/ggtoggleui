import { useEffect, useState } from "react";
import "../assets/styles/carausel.css";
import carouselimg from "../assets/images/Mask Group 99.png";
import arrow from "../assets/images/Polygon 1.png";

const Carousel = () => {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const items = [
        {
            id: 1,
            title: "Lorem ipsum",
            subtitle:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
        },
        {
            id: 2,
            title: "TMKOC Lorem",
            subtitle:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
        },
        {
            id: 3,
            title: "Lorem ipsum",
            subtitle:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
        },
        {
            id: 4,
            title: "CID ipsum",
            subtitle:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
        },
    ];

    useEffect(() => {
        const id = setInterval(() => {
            setCount((count + 1) % items.length);
        }, 5000);

        setIntervalId(id);

        return () => clearInterval(id);
    }, [count, items.length]);

    return (
        <div>
            <div className="carousel">
                <div className="carousel-wrapper">
                    {items.map((v, i) => {
                        return (
                            <div
                                key={v.id}
                                className={
                                    count === i
                                        ? "carousel-card carousel-card-active"
                                        : "carousel-card"
                                }
                            >
                                <div className="carousel-content">
                                    <h1>{v.title}</h1>

                                    <p>{v.subtitle}</p>

                                    <button className="carousel-btn">
                                        <span>Know more</span>

                                        <img src={arrow} alt="" />
                                    </button>
                                </div>

                                <div className="carousel-img">
                                    <img
                                        src={carouselimg}
                                        alt=""
                                        style={{ height: "100%", width: "auto" }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="dotgroup">
                {items.map((v, i) => {
                    return (
                        <div
                            className={count === i ? "bar" : "dot"}
                            key={i}
                            onClick={() => setCount(i)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
