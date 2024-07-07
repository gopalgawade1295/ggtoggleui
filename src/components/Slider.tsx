import React, { useRef, useState } from 'react'
import '../assets/styles/slider.css';
import arrow from "../assets/images/Group 9275.png";

const Slider = () => {
    const [count, setCount] = useState(0);
    const [down, setDown] = useState(false);
    const [left, setLeft] = useState<any | null>(0);
    const inputRef = useRef(document.createElement("div"))

    const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setCount(e.clientX);
        setDown(true);
    }

    const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
        if (!down || !inputRef.current) return;
        e.preventDefault();
        const newval = (e.clientX - count) * 0.115
        inputRef.current.scrollLeft = left - newval;
    }

    const mouseUp = (): void => {
        setDown(false);
    }

    const mouseScroll = (): void => {
        setLeft(inputRef.current.scrollLeft);
    }

    return (
        <div
            className='slider-container'
            ref={inputRef}
            onMouseDown={(e) => mouseDown(e)}
            onMouseMove={(e) => mouseMove(e)}
            onScroll={() => mouseScroll()}
            onMouseUp={() => mouseUp()}
        >
            <div className='slideritems-container'>
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
                    )
                })}
            </div>
        </div>
    )
}

export default Slider
