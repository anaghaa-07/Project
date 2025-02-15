import React from 'react';
import "./Carousel.css"


function Carousel() {
  return (

<div id="carouselExampleAutoplaying" class="carousel slide w-75 container" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/200/300" style={{width:'300px',height:'500px'}}class="d-block w-100" alt="Jewellery"/>
      
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/seed/picsum/200/300" style={{width:'300px',height:'500px'}}class="d-block w-100" alt="jewellery"/>
      </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/id/237/200/300" style={{width:'300px',height:'500px'}}class="d-block w-100" alt="Jewellery"/>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>


  );
}

export default Carousel;
