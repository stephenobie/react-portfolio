import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <>
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
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