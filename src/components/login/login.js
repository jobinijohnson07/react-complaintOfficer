import React, { Component } from 'react';
import './login.css';
import '../../App.css';
import logo from '../../Images/logo.jpg';
import mail from '../../Images/mail.svg';
import lock from '../../Images/lock.svg';
import axios from 'axios';


class login extends Component {
    state = {
        userName: '',
        password: '',
        Id: '',
        Data: [],
        togg: true,
    }
    handleUserName = (event) => {
        this.setState({ userName: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    getdata = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3005/userdata`)
            .then(res => {
                const persons = res.data;
                this.setState({ Data: persons });
                console.log("Data is", this.state.Data)
                const user = this.state.Data.filter(data => (data.username === this.state.userName && data.password === this.state.password));
                //const user = this.state.Data.map(userdata => userdata.username)
                //console.log("user is ", user);
                const userlen = user.length;
                console.log("len", userlen);
                if (this.state.userName !== '' && this.state.password !== '') {
                    if (userlen > 0 && userlen === 1) {
                        if (user[0].username === this.state.userName && user[0].password === this.state.password) {
                            // console.log("Welcome user", user[0].id);
                            this.props.history.push('/dashboard/' + user[0].id);
                        }
                    }
                    else {
                        return (
                            window.alert("Incorrect password or username")
                        );
                    }
                }
                else {
                    console.log("no value")
                    this.setState({ togg: false })
                }
                event.preventDefault();

            })



    }
    none = () => {
        this.setState({ togg: true })
        return (
            window.alert("Enter password and username")
        );
    }

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
                                        <div class="col-md-12 col-sm-12 col-xs-12 ">  
                                          <div class="form"> 
                                          <img src={mail} className="input-icon" />
                                              <input type="text" onChange={this.handleUserName} value={this.state.userName}  className="form-control" placeholder="Username or email"/>
                                          </div>
                                        </div>
                                       </div>  
                                       <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">  
                                          <div class="form">
                                          <img src={lock} className="input-icon" />
                                              <input type="password" onChange={this.handlePassword} className="form-control"  placeholder="Password"/>
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
                                                       <button type="submit" onClick={(event) => this.getdata(event)} className="button" onClick={(event) => this.move(event)}>
							                               <strong>Sign In</strong>
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