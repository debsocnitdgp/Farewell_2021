import React from 'react';
import "./ratings.css";



const Ratings = () => {
    return <div className='rating-container'>
<div class="container py-5">
  <div class="row">

    {/* <!-- For demo purpose--> */}
    <div className="col-lg-12 mx-auto mb-5 text-white text-center">
      <h1 className="display-4">Ratings</h1>
     
    </div>
    {/* <!-- END --> */}

    <div class="col-xl-3 col-lg-6 mb-4">
      <div class="bg-white rounded-lg p-5 shadow shape">
        <h2 class="h6 font-weight-bold text-center mb-4 absolute">Drunk</h2>

        {/* <!-- Progress bar 1 --> */}
        <div class="progress mx-auto" data-value='80'>
          <span class="progress-left">
                        <span class="progress-bar border-primary"></span>
          </span>
          <span class="progress-right">
                        <span class="progress-bar border-primary"></span>
          </span>
          <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center ">
            <div class="h2 font-weight-bold">80<sup class="small">%</sup></div>
          </div>
        </div>
        {/* <!-- END --> */}

      </div>
    </div>

    <div class="col-xl-3 col-lg-6 mb-4">
      <div class="bg-white rounded-lg p-5 shadow shape">
        <h2 class="h6 font-weight-bold text-center mb-4">Sarcasm</h2>

        {/* <!-- Progress bar 2 --> */}
        <div class="progress mx-auto" data-value='25'>
          <span class="progress-left">
                        <span class="progress-bar border-danger"></span>
          </span>
          <span class="progress-right">
                        <span class="progress-bar border-danger"></span>
          </span>
          <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div class="h2 font-weight-bold">25<sup class="small">%</sup></div>
          </div>
        </div>
        {/* <!-- END --> */}

      </div>
    </div>

    <div class="col-xl-3 col-lg-6 mb-4">
      <div class="bg-white rounded-lg p-5 shadow shape">
        <h2 class="h6 font-weight-bold text-center mb-4">Humour</h2>

        {/* <!-- Progress bar 3 --> */}
        <div class="progress mx-auto" data-value='76'>
          <span class="progress-left">
                        <span class="progress-bar border-success"></span>
          </span>
          <span class="progress-right">
                        <span class="progress-bar border-success"></span>
          </span>
          <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div class="h2 font-weight-bold">76<sup class="small">%</sup></div>
          </div>
        </div>
        {/* <!-- END --> */}
{/* 
        <!-- Demo info --> */}
        {/*  */}
        {/* <!-- END --> */}
      </div>
    </div>

    <div class="col-xl-3 col-lg-6 mb-4">
      <div class="bg-white rounded-lg p-5 shadow shape">
        <h2 class="h6 font-weight-bold text-center mb-4">Anger</h2>

        {/* <!-- Progress bar 4 --> */}
        <div class="progress mx-auto" data-value='12'>
          <span class="progress-left">
                        <span class="progress-bar border-warning"></span>
          </span>
          <span class="progress-right">
                        <span class="progress-bar border-warning"></span>
          </span>
          <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div class="h2 font-weight-bold">12<sup class="small">%</sup></div>
          </div>
        </div>
        {/* <!-- END --> */}

      
      </div>
    </div>
  </div>
</div>
</div>
}


 


export default Ratings;
