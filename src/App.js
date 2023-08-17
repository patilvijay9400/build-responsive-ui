import "./App.css";
import BannerSlider from "./components/BannerSlider";
import Header from "./components/Header";

function App() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs here
  ].map((image) => process.env.PUBLIC_URL + image);
  return (
    <>
      <Header />
      <BannerSlider images={images} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SqcY0GlETPk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SqcY0GlETPk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
