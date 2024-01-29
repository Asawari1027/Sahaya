
import React from 'react';
import Navbar from './Navbar';
// import { Router , Route , Switch } from 'react-router-dom';
// import Aboutus from './aboutus';
// import App2 from './App2';
// import Navbarpage from './Navbarpage';
// import Navbar from './Navbar.jsx';
// import {BrowerRoute,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
      <div>
      <div class="d-grid gap-2">
        <button class="btn btn-danger" type="button">Service At Sahaya </button>
      </div>


      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner carousel-fade">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1615461065624-21b562ee5566?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1627886206188-ef46c8939e00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>

      <div class="card">
        <div>
          <p>
          </p>
        </div>
        {/*right image box start   */}
     
        <div className="container my-4">
          <div className="row featurette d-flex justify-content-center align-items-center bg-body-tertiary">
            <div className="col-md-7 order-md-2 ">
              <h5 className="featurette-heading fw-normal lh-1">Rescues the Patient in case of the Emergency
                situation by doing just a click. </h5>
              <button class="btn btn-danger mt-3 " type="submit">Emergency »</button>
            
          </div>
          <div class="col-md-5 order-md-1">
            <img src="https://media.istockphoto.com/id/1084428236/photo/ambulance-car-on-blured-background-ambulance-auto-paramedic-emergency.jpg?s=2048x2048&w=is&k=20&c=dSvXzOTlI54dZhKwNyPpPep_IepcqeFOPnfobMywQ3Y=" svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>

         
          </div>
        </div>
        {/*  right image end*/}

    

    </div>


  </div >
    {/* right image box start */ }


    < div class="container my-4" >
<div class="row featurette d-flex justify-content-center align-items-center bg-body-tertiary">
  <div class="col-md-7 order-md-1 ">
    <h2 class="featurette-heading fw-normal lh-1">Inform Your Nearest Blood Bank </h2>
    <button class="btn btn-danger mt-3 " type="submit">Nearest Blood Bank »</button>
   
  </div>
  <div className="col-md-5 order-md-1">
    <img src="https://media.istockphoto.com/id/1356846359/photo/test-tubes-with-red-liquid-in-holder-scientific-experiments-development-of-vaccines-drugs.jpg?s=2048x2048&w=is&k=20&c=utWTzm05zsbe_d6dTjL_9HfZ9VaB9TStMeyTa7HbLGY="svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text>
    
  </div>
</div>
</div >
  {/* right image end  */ }

  < div class="b-example-divider" ></div >
<div class="container my-5">
 <div class="p-5 text-center bg-body-tertiary rounded-3">
   <h4 class="text-body-emphasis">Call our  Assistance</h4>
  
   <a href="#" class="btn btn-danger ">+9165739202</a>
 </div>
</div>
<div class="b-example-divider"></div>

{/*last part column end  */ }



{/* footer start */ }
<div class="bg-dark text-white ">
<footer class="container py-5">
<div class="row">
  <div class="col-12 col-md">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
    <small class="d-block mb-3 text-body-secondary">© 2017–2023</small>
  </div>
  <div class="col-6 col-md">
    <h5>Features</h5>
    <ul class="list-unstyled text-small">
      <li><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
    </ul>
  </div>
  <div class="col-6 col-md">
    <h5>Resources</h5>
    <ul class="list-unstyled text-small">
      <li><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
    </ul>
  </div>
  <div class="col-6 col-md">
    <h5>Resources</h5>
    <ul class="list-unstyled text-small">
      <li><a class="link-secondary text-decoration-none" href="#">Business</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Education</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Government</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Gaming</a></li>
    </ul>
  </div>
  <div class="col-6 col-md">
    <h5>About</h5>
    <ul class="list-unstyled text-small">
      <li><a class="link-secondary text-decoration-none" href="#">Team</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
      <li><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
    </ul>
  </div>
</div>
</footer></div>
<div>

</div>
</div >


        </>
        )
}

export default App;