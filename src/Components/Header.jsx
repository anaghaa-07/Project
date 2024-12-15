import React from 'react';
import { CgFormatHeading } from "react-icons/cg";
import { GrArchive } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { TiHomeOutline } from "react-icons/ti";

import "./header.css"

function Header(){

    return(
      
            <div className="home-container">
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <a style={{fontFamily:"sans-serif"}}class="navbar-brand" href="#">
                  <CgFormatHeading style={{width:"50px",height:"50px",fontWeight:"bold"}}/>
                    Hazel
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                        <GrArchive style={{width:"30px",height:"30px"}}/>
                          Store
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                        <TiHomeOutline style={{width:"30px",height:"30px"}}/>
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                        <AiFillCalendar style={{width:"30px",height:"30px"}} />
                          Business
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <MdOutlineManageAccounts style={{width:"30px",height:"30px"}} />
                          Account
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Login
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                             Signup
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                             Contact
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <form className="d-flex search-bar" role="search">
                  
                      <input
                      
                        width="300px"
                        className="d-flex form-control me-2 w-100 form-control-lg search-bar"
                        type="search"
                        placeholder="Search for trending jewellery and much more.."
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Cart
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>);
    
}


export default Header;