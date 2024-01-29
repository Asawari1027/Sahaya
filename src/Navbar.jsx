import React from 'react';
// import { useState } from 'react';

export default function Navbar() {

//  const [AllEntries, setAllEntries] = useState([]);

//  const Onsubmit = (e) => {

//   e.preventDefault();
//    const logindata = {
//     Name:Name,
//     Email:Email,
//     PhoneNo:PhoneNo,
//     BloodGroup:BloodGroup,
//     Address:Address,
//    }

//    setAllEntries([...AllEntries, logindata])

//    console.log(logindata);
//  }

  return (
    <div>
    {/* <!-- navbar start --> */}
  <nav className="navbar bg-dark border-bottom border-body " data-bs-theme="dark">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><i class="fa-solid fa-hand-holding-droplet"></i> Sahaya</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
         
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <a class="nav-link active mx-5  " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-5" aria-current="page" href="#">Medical History</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active mx-5" aria-current="page" href="#">First Aid</a>
            </li>
            <li class="nav-item">
              <a class="nav-link  bg-danger active mx-5" aria-current="page" href="#"> Emergency</a>
            </li>
            
            <li class="nav-item">
              <div class="dropdown">
                <a class="btn nav-link active mx-5 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 About Us
                </a>
              
                <ul class="dropdown-menu">
                 
                  <li><a class="dropdown-item" href="Abouus.html"> Blood related Details </a></li>
                  <li><a class="dropdown-item" href="medicalhistory.html">Info about Sahaya</a></li>
                </ul>
              </div>
            </li>
           
            
           
           
          
          </ul>
    
   
    

    <form className="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  
      <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Login</button>
<div class="modal dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">User Info</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {/* <form onSubmit={onSubmit}> */}
        <form>
          <div class="mb-3 text-white">
            <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-user"></i>Name:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3 text-white">
            <label for="recipient-name" class="col-form-label"><i class="fa-regular fa-at"></i>    email:</label>
            <input type="email" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3 text-white">
            <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-droplet"></i>    Blood Group:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3 text-white">
            <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-phone-volume"></i>Phone no:</label>
            <input type="number" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3 text-white">
            <label for="recipient-name" class="col-form-label"><i class="fa-sharp fa-solid fa-location-dot"></i>Address:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">Sumbit</button>
      </div>
    </div>
  </div>
  </div>

    </form>
    </div>
    

   </div> 
   </nav>
  </nav>
    </div>
  )
}
