import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <>
  
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Send me a message!</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>


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