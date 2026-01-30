import "./App.css";

function App() {

  const cards = [
  {
    title: "Mountains",
    text: "Beautiful mountain landscapes with scenic views.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Forest",
    text: "Green forests showcasing the beauty of nature.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
  },
  {
    title: "Beach",
    text: "Calm beaches with soothing ocean waves.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  }
];


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 heading">
        Experiment-2.2: Card-Based Layout Using Bootstrap
      </h2>

      <div className="row">
        {cards.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card custom-card h-100">
              <img
                src={item.img}
                className="card-img-top"
                alt={item.title}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <button className="btn btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
