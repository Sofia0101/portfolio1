import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import imagen1 from '../img/back2.jpg';


function Proyects() {
  return (

  <section className='cards_content'>

<div className="d-flex justify-content-around">
<Card style={{ width: '18rem', height: "21rem" }}>
  <Card.Img variant="top" src={imagen1} />

  <Card.Body>
    
    <Card.Title>Projects (Design & Develop)</Card.Title>
    <Card.Text>
    2023 / Commission / Special
    </Card.Text>
    <Button variant="dark">Project</Button>
  </Card.Body>
</Card>
</div>

<div>
<Card style={{ width: '18rem', height: "21rem" }}>
<Card.Img variant="top" src={imagen1} />
  <Card.Body>
    <Card.Title>BNN Online Store</Card.Title>
    <Card.Text>
    2023 / Commission / Corporate
    </Card.Text>
    <Button variant="dark">Project</Button>
  </Card.Body>
</Card>
</div>

<div>
<Card style={{  width: '18rem',height: "21rem" }}>
<Card.Img variant="top" src={imagen1} />
  <Card.Body>
    <Card.Title>ILY GIRL</Card.Title>
    <Card.Text>
    2023 / Commission / Special
    </Card.Text>
    <Button variant="dark">Project</Button>
  </Card.Body>
</Card>
</div>

</section>

  );
}

export default Proyects;
