import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contacto(props) {
  return (
    <section className="page" data-page="contact" id='contact'>
      <div className="page_content contact">
        <div className="contact_wrap">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Me!</Form.Label>
        <Form.Control type="message" placeholder="Message..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
        </div>
      </div>
    </section>

  );
}

export default Contacto;
