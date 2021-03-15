import React, { Component } from 'react';
import './login.css';
import '../../App.css';
import logo from '../../Images/logo.jpg';
import mail from '../../Images/mail.svg';


class login extends Component {
    render() {
        return (
            <div className="cont">
                <div class="container">
                    <div class="row vijay">
                       <div class="col-lg-6">
                              <img src={logo} className="img" />
                       </div>
                       <div class="col-lg-6">
                           <div class="row">
                               <div class="col-md-6 offset-md-3 mt-4">
                                   <form>
                                     <div className="container1">
                                       <h1 className="logo">Qberaa</h1>
                                       <p class="content"> Welcome back! Please login to continue <br></br>
                                         <span class="required">Complaint Officer Login</span>                                       
                                       </p> 
                                       <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12 p-0">  
                                          <div class="form"> 
                                          <img src={mail} className="input-icon" />
                                              <input type="text" className="form-control" placeholder="Username or email"/>
                                          </div>
                                        </div>
                                       </div>  
                                       <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">  
                                          <div class="form">
                                              <input type="text" className="form-control"  placeholder="Password"/>
                                          </div>
                                        </div>
                                       </div> 
                                       <div class="content apple">
                                           <div class="row check ">
                                               <div class="col-sm-6 ">
                                                  <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                       <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                       <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                                    </div>           
                                                    </div>
                                                  </div>
                                               <div class="col-sm-6 ">
                                                   <div class="form-group form-check">
                                                       <p className="check">Forgot Password?</p> <br>
                                                       </br>
                                                       <button type="button" className="button" onClick={(event) => this.move(event)}>
							                               <strong>Login</strong>
						                               </button>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>                          
                                    </div>     
                                   </form>
                                   <p1 class="signup"><span class="qberaa">New to Qberaa? Sign Up</span></p1> 
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default login;