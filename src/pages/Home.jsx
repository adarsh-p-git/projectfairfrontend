import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import titleimage from '../assets/mernp1.gif'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'


function Home() {
  const [loggedin,setLoggedin]=useState(false)

 useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setLoggedin(true)
  }
  else{
    setLoggedin(false)
  }
 },[])

    return (
        <>
            <div className="container-fluid rounded bg-primary">

                <Row className='align-itemes-center p-5'>
                    <Col sm={12} md={6}>
                        <h1 className='fw-bolder text-light'><i class="fa-solid fa-list-check"></i>Project-Fair</h1>
                        <p className='align-items-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi error asperiores, sunt fugiat consectetur totam voluptas tempore exercitationem! Recusandae qui neque, incidunt quod molestiae amet fugit molestias nihil eligendi temporibus.</p>
                        {loggedin?
                         <Link to={'/dashboard'} className='btn btn-warning border border-rounded'>Manage Your Projects <i class="fa-solid fa-arrow-right"></i></Link>:
                         <Link to={'/login'} className='btn btn-warning border border-rounded'>Start to Explore <i class="fa-solid fa-arrow-right"></i></Link>
                        }

                    </Col>

                    <Col sm={12} md={6}>
                    <img width={'500px'} src={titleimage} alt="" />
                    </Col>


                </Row>
            </div>

            {/* projectcard */}

            <div className='all-projects mt-4'>
                <h1 className='fw-bolder text-center'>Explore Your Projects</h1>
   <marquee scrollAmount={25}>
                <Row className='align-items-center'>
                    <Col sm={12} md={6} lg={3}>

                      <ProjectCard/>  

                    </Col>

                    <Col sm={12} md={6} lg={3}>

                      <ProjectCard/>  

                    </Col>

                    <Col sm={12} md={6} lg={3}>

                      <ProjectCard/>  

                    </Col>

                    <Col sm={12} md={6} lg={3}>

                      <ProjectCard/>  

                    </Col>
                </Row>
                </marquee>

                <div className='text-center mt-5'><Link to={'/projects'}>View More Projects</Link></div>
            </div>


        </>
    )
}

export default Home


// const [username,setUsername]=useState(false)

// useEffect(()=>{
//   if(sessionStorage.getItem("existingUser")){
//     setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username);
//   }
// })