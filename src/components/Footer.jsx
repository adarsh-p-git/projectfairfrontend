import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
    <div> <MDBFooter style={{backgroundColor:'beige'}} className='text-center text-lg-start text-muted p-3'>
  

  <section className=''>
    <MDBContainer className='text-center text-md-start mt-5'>
      <MDBRow className='mt-3'>
        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>
          <i class="fa-solid fa-video me-2"></i>
            project fair
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </MDBCol>

        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-1'>
          <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
          <p>
            <a href='/' className='text-reset'>
            Home
            </a>
          </p>
          <p>
            <a href='http://localhost:3000/login' className='text-reset'>
            Login
            </a>
          </p>
          <p>
            <a href='http://localhost:3000/Register' className='text-reset'>
              Register
            </a>
          </p>
    
        </MDBCol>

        <MDBCol md="1" lg="2" xl="2" className='mx-auto mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
          <p>
            <a href='/' className='text-reset'>
              React
            </a>
          </p>
          <p>
            <a href='/' className='text-reset'>
              React Bootstrap
            </a>
          </p>
          <p>
            <a href='/' className='text-reset'>
              Bootswatch
            </a>
          </p>
        </MDBCol>

        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
          <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
          <p>
          <input  type="text" style={{width:'170px',color:"black"}} /> <input type="button" value="subscribe" className='btn-warning' />
          </p>
          <p>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
  

  <div>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="facebook-f" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="twitter" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="instagram" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="linkedin" />
    </a>
  </div>
</section>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>

  <div className='text-light text-center p-4' style={{ backgroundColor: 'black' }}>
    © 2024 Copyright: Project Fair build with react
  </div>
</MDBFooter></div></>
  )
}

export default Footer