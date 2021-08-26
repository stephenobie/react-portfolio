import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
export default function Contact() {
  return (


    
    <MDBFooter bgColor='dark' className='text-white text-center text-lg-left , fixed-bottom'>
    <MDBContainer className='p-4'>
      <MDBRow>
       

        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
        
          <ul className='list-unstyled mb-0'>
            <li>
              <a href='https://github.com/stephenobie' className='text-white'>
                Github
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/stephen-obie-a56261107/' className='text-white'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='mailto:sobie31@outlook.com' className='text-white'>
                sobie31@outlook.com
              </a>
            </li>
          </ul>
        </MDBCol>

    
      </MDBRow>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-white' href='https://www.linkedin.com/in/stephen-obie-a56261107/'>
        Stephen Obie
      </a>
    </div>
  </MDBFooter>

);
}