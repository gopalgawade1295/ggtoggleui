import "../assets/styles/card.css";

const arr = [
    {
        id: 1,
        title: "Lorem ipsum",
        number: "123+",
        subtitle: "Lorem ipsum",
        article:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
        id: 2,
        title: "Lorem ipsum",
        number: "123",
        subtitle: "Lorem ipsum",
        article:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
        id: 3,
        title: "Lorem ipsum",
        number: "12+",
        subtitle: "Lorem ipsum",
        article:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
        id: 4,
        title: "Lorem ipsum",
        number: "123",
        subtitle: "Lorem ipsum",
        article:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
];

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                {arr.map((v, i) => {
                    return (
                        <div className="card-content" key={i}>
                            <p>{v.title}</p>

                            <h1>{v.number}</h1>

                            <h4>{v.subtitle}</h4>

                            <div className="article">
                                <p>{v.article}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;
