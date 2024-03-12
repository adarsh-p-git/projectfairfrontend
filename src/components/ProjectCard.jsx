import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'


function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNg3iIetS2JKCdLABJ2SFYE5aYHlUkECSJ6uqAvyOKvDZSQrMf8VEKj50Pw4VGfN0ET8&usqp=CAU" onClick={handleShow} />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                </Card.Body>
            </Card>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img style={{ height: '300px', width: '300px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNg3iIetS2JKCdLABJ2SFYE5aYHlUkECSJ6uqAvyOKvDZSQrMf8VEKj50Pw4VGfN0ET8&usqp=CAU" alt="img" />
                        </Col>
                        <Col md={6}>
                            <h2>Project Title</h2>
                            <p>Project Overview: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat et temporibus ex repudiandae porro ipsam expedita ratione nobis neque quia consequuntur, eius quo quam distinctio quaerat. Odit doloremque iste incidunt.</p>
                        </Col>
                    </Row>
                    <div>
                    <i class="fa-brands fa-github"></i>  <i class="fa-solid fa-link"></i>
                    </div>
                </Modal.Body>
            </Modal >

        </>
    )
}

export default ProjectCard