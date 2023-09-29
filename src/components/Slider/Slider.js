import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function SliderMain() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
      <div>
        <img
          className="d-block w-100"
          src="/655989.jpg"
          alt="First slide"
          style={{
            height: "600px",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
      <img
          className="d-block w-100"
          src="/655991.jpg"
          alt="Second slide"
          style={{
            height: "600px",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
      <img
          className="d-block w-100"
          src="/669660.png"
          alt="Third slide"
          style={{
            height: "600px",
            objectFit: "cover",
          }}
        />
      </div>
    </Carousel>
  );
}

export default SliderMain;
