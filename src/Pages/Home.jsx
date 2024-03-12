import React from 'react'
import { Col, Row } from 'react-bootstrap'
import images from '../assets/images.gif'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:"beige"}} className='container-fluid rounded'>
        <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
                <h1 style={{fontSize:'80px'}} className='fw-border text-dark'><i class="fa-solid fa-list-check fa-xs me-2 "></i>Project Fair</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, excepturi. 
                    Nihil culpa distinctio praesentium cupiditate, provident quia adipisci dicta, 
                    pariatur laborum nemo dolores quisquam ex veniam, modi necessitatibus ab repudiandae!</p>
                    <Link to={'/login'} className='btn btn-dark p-2'>Start to Explore<i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
            </Col>
            <Col sm={12} md={6}>
                <img width={'500px'} src={images} alt="" />
            </Col>
        </Row>

    </div>


    <div className='all-projects mt-5'>
        <h1 className='text-center'>Explore your projects</h1>
        <marquee scrollAmount={15}>
        <Row>
            <Col sm={12} md={6} lg={4}>
                <ProjectCard/>
            
            </Col>
        </Row>
        </marquee>
        <div className='text-center'><Link to={'/project'}>View more projects</Link></div>

    </div>
    </>

    
  )
}

export default Home