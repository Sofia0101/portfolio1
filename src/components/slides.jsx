import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Imagengpt3 from "../img/imagenGpt3.jpeg";
import ImagenApeperia from "../img/apeperia.jpeg";
import ImagenOrg from "../img/org.jpeg";

function UncontrolledExample() {

  return (
    <div className="carousel">
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Imagengpt3}
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={ImagenOrg}
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={ImagenApeperia}
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;
