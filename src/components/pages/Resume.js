import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import resume from '../styles/assets/images/'

export default function Resume() {
  return (
    <>
    <div>
     
    </div>


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