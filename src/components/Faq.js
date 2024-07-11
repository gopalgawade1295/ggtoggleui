import { useState } from "react";
import "../assets/styles/accordian.css";
import view from "../assets/images/add_circle_FILL0_wght300_GRAD-25_opsz48@2x.png";
import close from "../assets/images/do_not_disturb_on_FILL1_wght100_GRAD200_opsz24.png";

const Faq = () => {
    const [show, setShow] = useState("");

    const items = [
        {
            id: 1,
            ques: "How does an investor gain access to MF Utility?",
            ans: "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            ques: "Will investors be able to have multiple Common Account Numbers?",
            ans: "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
        {
            id: 3,
            ques: "How does an investor gain access to MF Utility?",
            ans: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
    ];

    return (
        <div className="accordian">
            <h1>FAQ</h1>

            {items.map((v) => {
                return (
                    <div key={v.id}>
                        <div
                            className="accordian-ques"
                            onClick={() => setShow(show === v.id ? "" : v.id)}
                        >
                            <p>{v.ques}</p>

                            <img
                                src={show === v.id ? close : view}
                                alt=""
                                style={{ margin: "8px", height: "26.7px" }}
                            />
                        </div>

                        <div className={show === v.id ? "accordian-open" : "accordian-close"}>
                            <div style={{ display: show === v.id ? "block" : "none" }}>
                                <p>{v.ans}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default Faq;
