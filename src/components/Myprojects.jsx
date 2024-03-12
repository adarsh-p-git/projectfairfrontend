import React from 'react'
import Addprojects from './Addprojects'

function Myprojects() {
  return (
    <div className='card shadow p-3 mt-3 text-dark'>
        <div className='d-flex'>
            <h2>My Projects</h2>
            <div className='ms-auto'>
                <Addprojects/>
            </div>
        </div>
        <div className="mt-4">
            {/* collection of projects */}
            <div className="border d-flex align-items-center rounded p-2">
                <h5>Project Title</h5>
                <div className="icon ms-auto ">
                    <button className='btn'><i class="fa-solid fa-pen-to-square" style={{color:'black'}}></i></button>
                    <button className='btn'><i class="fa-brands fa-github" style={{color:'black'}}></i></button>
                    <button className='btn'><i class="fa-solid fa-trash" style={{color:'black'}}></i></button>
                </div>
            </div>
            <p className='text-danger fw-bolder fs-5'>No Projects Uploaded Yet!!!</p>

        </div>
    </div>
  )
}

export default Myprojects