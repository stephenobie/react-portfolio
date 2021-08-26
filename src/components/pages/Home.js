
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};


export default function Home() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Stephen Obie</h1>


     


    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>

          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

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

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

           
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

    </div>
  );
}