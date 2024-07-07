import React, { useState } from "react";
import "../assets/styles/navbar.css";
import arrow from "../assets/images/Icon ionic-ios-arrow-down.png";
import search from "../assets/images/Icon material-search.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Navitems {
    id: number;
    title: string;
    dropdownitems: Array<string>;
}

const Navbar = () => {
    const [show, setShow] = useState<boolean>(false);

    const list: Array<Navitems> = [
        {
            id: 1,
            title: "Qualifications",
            dropdownitems: ["Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3"],
        },
        {
            id: 2,
            title: "Organizations",
            dropdownitems: ["Lorem 1", "Lorem 2", "Lorem 3"],
        },
        {
            id: 3,
            title: "Research & Analysis",
            dropdownitems: ["Ipsum 1", "Ipsum 2"],
        },
        {
            id: 4,
            title: "Lorem ipsum",
            dropdownitems: ["Lorem ipsum A", "Lorem ipsum B", "Lorem ipsum C"],
        },
        { id: 5, title: "Lorem ipsum", dropdownitems: ["Lorem D", "Lorem E"] },
    ];

    return (
        <div>
            <nav className="navbar">
                <h1>LOGO</h1>

                <ul className="ullist">
                    {list.map((v) => {
                        return (
                            <li key={v.id}>
                                <div className="navbutton">
                                    <p>{v.title}</p>

                                    <img src={arrow} alt="" />
                                </div>

                                <div className="dropdown-list">
                                    {v.dropdownitems.map((v, i) => {
                                        return (
                                            <a href="" key={i}>
                                                {v}
                                            </a>
                                        );
                                    })}
                                </div>
                            </li>
                        );
                    })}

                    <li>
                        <div className="navbutton">
                            <img src={search} alt="search" style={{ height: "20px" }} />
                        </div>
                    </li>

                    <li>
                        <div className="navbutton-last">
                            <p>Enrolment</p>
                        </div>
                    </li>
                </ul>

                <div className="sidedrawer-open" onClick={() => setShow(!show)}>
                    {show ? <CloseIcon /> : <MenuIcon />}
                </div>
            </nav>

            <div className={show ? "sidedrawer" : "sidedrawer-hidden"} style={{paddingTop:"30px"}}>
                {list.map((v) => {
                    return (
                        <div className="sidedrawerlist" key={v.id}>
                            <div className="sidebutton">
                                <p>{v.title}</p>
                            </div>

                            <div className="sidedrawer-dropdowns">
                                {v.dropdownitems.map((v, i) => {
                                    return (
                                        <a href="" key={i}>
                                            {v}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

                <div className="sidebutton">
                    <p>Enrolment</p>
                </div>
            </div>

            <div
                className={show ? "backdrop" : "backdrop-hidden"}
                onClick={() => setShow(!show)}
            />
        </div>
    );
};

export default Navbar;
