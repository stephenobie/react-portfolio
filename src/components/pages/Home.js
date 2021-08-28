
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export default function Home() {
  return (
<>
    <header>
      <div
        className='text-center bg-image'
        style={{ backgroundImage: "url('https://wallpaperaccess.com/full/1356106.jpg')", height:  800}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Stephen Obie</h1>
              <h4 className='mb-3'>Web Developer</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

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
  )
};