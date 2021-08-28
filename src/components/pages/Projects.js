import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (

    <>
    
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>2021</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>2021</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            card has even longer content than the first to show that equal height action.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>2021</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>



<MDBFooter bgColor='dark' className='text-white, text-center,  fixed-bottom'>
<MDBContainer className='p-4'>
  <MDBRow>
 
    <MDBCol>
    
      <ul className='mb-12, text-center'>
        <li>
          <a href='https://github.com/stephenobie' className='text-white, text-center'>
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

<div className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  &copy; {new Date().getFullYear()} Copyright:{' '}
  <p className='text-white'>
  © 2021 Stephen Obie
  </p>
</div>
</MDBFooter>
    </>
    
  );
  }