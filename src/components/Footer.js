import fb from "../assets/images/Icon awesome-facebook-f.png";
import ln from "../assets/images/Icon awesome-linkedin.png";
import im from "../assets/images/Icon awesome-instagram.png";
import x from "../assets/images/Icon awesome-twitter.png";
import yt from "../assets/images/Icon awesome-youtube.png";
import qr from "../assets/images/quora.png";
import place from "../assets/images/Icon material-location-on.png";
import clock1 from "../assets/images/Group 17190.png";
import clock2 from "../assets/images/Group 17191.png";
import train from "../assets/images/Group 17156.png";
import "../assets/styles/footer.css";

const arr = [fb, ln, im, x, yt, qr];

const items = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    img: place,
    height: "25px",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    img: clock1,
    height: "20px",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    img: clock2,
    height: "20px",
  },
  {
    id: 4,
    title: "Lorem ipsum asd asdsaweeq Lorem Ipsum",
    img: train,
    height: "23px",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-div-n">
          <h3>Contact us</h3>

          <p>
            Address: amet, consetetur sadipscing elitr, sed diam Email id:
            eirmod tempor invidunt ut labore et dolore <br /> Phone no: 123456789
          </p>
        </div>

        <div className="footer-follow">
          <h3>Follow us</h3>

          <div>
            {arr.map((v, i) => {
              return (
                <div className="footer-social" key={i}>
                  <img
                    src={v}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="footer-div-n">
          <h3>Head Office</h3>

          {items.map((v) => {
            return (
              <div className="footer-address" key={v.id}>
                <img
                  src={v.img}
                  alt=""
                  style={{ height: v.height }}
                />

                <span>{v.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer-rights">
        <p>© 2021 All Rights Reserved. Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
