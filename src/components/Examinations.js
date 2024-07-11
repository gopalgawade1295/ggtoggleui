import "../assets/styles/examinations.css";
import clock from "../assets/images/Group 2645.png";

const Examinations = () => {
    return (
        <div className="exam-container">
            <div className="exam">
                <div className="exam-content">
                    <h1>Upcoming Examinations</h1>

                    <p className="title">
                        Enquire about the examination & register for the exams
                    </p>
                </div>

                <div className="exam-content">
                    <div className="exam-time">
                        <img
                            src={clock}
                            alt=""
                            style={{ height: "45px", marginRight: "12px" }}
                        />

                        <div>
                            <h4>02th October 2014</h4>
                            <p>Level 1 exam</p>
                        </div>
                    </div>
                </div>

                <div className="exam-content">
                    <div className="exam-time">
                        <img
                            src={clock}
                            alt=""
                            style={{ height: "45px", marginRight: "12px" }}
                        />

                        <div>
                            <h4>Nov-Dec 2016</h4>
                            <p>Level 2</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>

                <div className="exam-content">
                    <div className="exam-time">
                        <img
                            src={clock}
                            alt=""
                            style={{ height: "45px", marginRight: "12px" }}
                        />

                        <div>
                            <h4>Ongoing this year</h4>
                            <p>Level 3 (Grad)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Examinations;
