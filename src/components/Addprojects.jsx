import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function Addprojects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="row">
            <div className="col-lg-6">
            <label>
                    <input type="file" style={{display:'none'}} />
                    <img style={{width:'300px'}} src="https://static.thenounproject.com/png/212328-200.png" alt="" />
                </label> 
            </div>
            <div className="col-lg-6">
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark' placeholder='Project Title' />
            </div>
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark'text-dark placeholder='Language Used' />
            </div>
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark' placeholder='GitHub' />
            </div>
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark'text-dark placeholder='Website Link' />
            </div>
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark'text-dark placeholder='Project Overview' />
            </div>
            </div>
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addprojects