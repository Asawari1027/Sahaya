import React from 'react';
// import { Link } from "react-router-dom";


function Aboutus() {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body navbar-center" data-bs-theme="dark"></nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" ></nav>
      <div className="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><i class="fa-solid fa-hand-holding-droplet"></i> Sahaya</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active mx-4" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-5" aria-current="page" href="#">Medical History</a>
            </li>
            <li className="nav-item">
              <a class="nav-link active mx-5" aria-current="page" href="#">First Aid</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active mx-5" aria-current="page" herf="#">About Us</a>
            </li>

          </ul>





          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Login</button>

            <div class="modal dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">User Info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3 text-white">
                        <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-user"></i>Name:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                      </div>
                      <div class="mb-3 text-white">
                        <label for="recipient-name" class="col-form-label"><i class="fa-regular fa-at"></i>    email:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                      </div>
                      <div class="mb-3 text-white">
                        <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-droplet"></i>    Blood Group:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                      </div>
                      <div class="mb-3 text-white">
                        <label for="recipient-name" class="col-form-label"><i class="fa-solid fa-phone-volume"></i>Phone no:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                      </div>
                      <div class="mb-3 text-white">
                        <label for="recipient-name" class="col-form-label"><i class="fa-sharp fa-solid fa-location-dot"></i>Address:</label>
                        <input type="text" class="form-control" id="recipient-name" />
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



      <p></p>




      <div className="align-item-center">


        {/* beautiful part */}



        <div>
          <main class="container">
            <div class="bg-body-tertiary py-5 rounded mt-3">
              <h1>  Click Here for Blood Availability</h1>
              <p class="lead">"Click here with confidence to find the life-saving blood you need – your action can be the spark of hope for someone in their time of need."
              </p>
              <a class="btn btn-lg btn-danger" href="/docs/5.3/components/navbar/" role="button">Blood Availability search»</a>
            </div>
          </main></div>
        <hr></hr>
        {/*  right image box start*/}

        <div className="container my-4 order-md-2">
          <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7 order-md-2 ">

              <h2 class="featurette-heading fw-normal lh-1">        "Every drop you share is a gift of life;   <span class="text-body-secondary">donate blood    and

                spread kindness."</span></h2>
              <p class="lead">Donating blood can give you a sense of satisfaction and accomplishment. Knowing that you've contributed to saving lives can boost your mood.</p>
              <a class="btn btn-lg btn-danger" href="/docs/5.3/components/navbar/" role="button">Donor Login»</a>
            </div>
            <div class="col-md-5 order-md-1">
              <img src="https://media.istockphoto.com/id/1353683287/photo/nurse-taking-blood-sample-to-make-a-test-in-laboratory.jpg?s=2048x2048&w=is&k=20&c=_oNbm8OWkgX0haUrJa4pTuy7vlDkkpkrkIUaMpfDb1I=" svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill dy=".3em" />
              </img>
            </div>
          </div>
        </div>
        <hr>
          {/* right image box end */}
          {/* right image box start */}


          <div className="container my-4 ">
            <div class="row featurette d-flex justify-content-center align-items-center">
              <div class="col-md-7 order-md-1 ">
                <h2 class="featurette-heading fw-normal lh-1">"Be a life superhero!<span class="text-body-secondary" />Be a life superhero! Give the gift that keeps on giving </h2>. <p class="lead">donate blood and let your kindness flow in the veins of those in need. Your drop today could be someone's lifeline tomorrow. Join the lifesaving league, and together, let's make a difference drop by drop. Donate blood, save lives!""</p>


                <a class="btn btn-lg btn-danger" href="/docs/5.3/components/navbar/" role="button">Blood Donation Camp»</a>
              </div>
              <div class="col-md-5 order-md-1">
                <img class="img-fluid" width="400" height="400" src="https://media.istockphoto.com/id/1322676393/photo/storing-of-blood-and-blood-products.jpg?s=2048x2048&w=is&k=20&c=LHTbYTPjiLGWl4aDxN9zVH6-PM_PvO5B_6btAUvesRY=" />


              </div>
            </div>
          </div>
          {/* //right image box end  */}

        </hr>
        {/*  right image box start*/}

        <hr></hr>

        <div className="container my-4">
          <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7 order-md-2 ">
              <h2 class="featurette-heading fw-normal lh-1">"Blood Bank Hub: <span class="text-body-secondary">Navigating Hope and Healing through Our Comprehensive Directory"</span></h2>
              <p class="lead">A blood bank directory is a quick guide to different blood banks. It gives you names, locations, operating hours, and contact info. It's a handy tool for finding the nearest place to donate or access blood services easily.

              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img src="https://media.istockphoto.com/id/1356846359/photo/test-tubes-with-red-liquid-in-holder-scientific-experiments-development-of-vaccines-drugs.jpg?s=2048x2048&w=is&k=20&c=utWTzm05zsbe_d6dTjL_9HfZ9VaB9TStMeyTa7HbLGY=" svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em" />

            </div>
          </div>
        </div>
        {/*right image box end  */}

        {/* last part column */}

        <div class="b-example-divider"></div>
        <div class="container my-5">
          <div class="p-5 text-center bg-body-tertiary rounded-3">
            <h1 class="text-body-emphasis">Learn About Donation</h1>
            <p class="lead">
              This is a simple Bootstrap jumbotron that sits within a <code>Learn About Donation</code>, recreated with built-in utility classes.
            </p>
            <img src="https://www.kokilabenhospital.com/blog/wp-content/uploads/2020/06/Blood-compatibility.jpg" alt="" class="" />
          </div>
        </div>
        <div class="b-example-divider"></div>
        {/* last part column end */}

        <hr></hr>
        {/* FOOTER START */}

        <div className="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
              </a>
              <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

              <li class="ms-3"><a class="text-body-secondary" href=""><svg class="bi" width="24" height="24">
                <i class="fa-brands fa-facebook"></i></svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><i class="fa-brands fa-twitter"></i></svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24" >  <i class="fa-solid fa-share-from-square"></i></svg></a></li>
            </ul>
          </footer>
        </div>
        {/* FOOTER END  */}

      </div>
    </div>
  );
}
export default Aboutus;