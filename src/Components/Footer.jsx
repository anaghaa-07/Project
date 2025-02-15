import React from "react"
import { IoMdCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { CiChat1 } from "react-icons/ci";
function Footer(){
  return (
    <div class="container">
      <footer
        class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top"
      >
        <div class="col mb-3">
       
          <a
            href="#"
            class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            
          </a>
          <p class="text-body-secondary">© 2024</p>
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3">
          <h5>About</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Blog</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Pricing</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">FAQs</a>
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Orders</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Track Your Order</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Returns</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">Payment</a>
            </li>
            
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Contact</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="mailto:anagabalakrishna@gmail.com" class="nav-link p-0 text-body-secondary"><CgMail style={{width:"30px",height:"30px"}}/>Write to Us</a>
            </li>
             <li class="nav-item mb-2">
            
              <a href="#" class="nav-link p-0 text-body-secondary"><IoMdCall style={{width:"30px",height:"30px"}}/>Call</a>
            
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary"><CiChat1 style={{width:"30px",height:"30px"}}/>Chat With Us</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}


export default Footer;