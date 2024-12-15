import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="image-gallery">
      <div class="image-container">
  <img src="https://picsum.photos/200" alt="Image 1"/>
  <button class="explore-button">Explore Now</button>
</div>
<div class="image-container">
  <img src="https://picsum.photos/200" alt="Image 2"/>
  <button class="explore-button">Explore Now</button>
</div>
<div class="image-container">
  <img src="https://picsum.photos/seed/picsum/200/300" alt="Image 3"/>
  <button class="explore-button">Explore Now</button>
</div>
<div class="image-container">
  <img src="https://picsum.photos/seed/picsum/200/300" alt="Image 3"/>
  <button class="explore-button">Explore Now</button>
</div>
<div class="image-container">
  <img src="https://picsum.photos/200" alt="Image 2"/>
  <button class="explore-button">Explore Now</button>
</div>
<div class="image-container">
  <img src="https://picsum.photos/seed/picsum/200/300" alt="Image 3"/>
  <button class="explore-button">Explore Now</button>
</div>
      
      
    </div>

    

  );
}

export default Products;