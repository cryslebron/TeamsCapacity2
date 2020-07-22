import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logIn } from './../redux/actions/securityActions';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import SignUp from './SignUp';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props.logIn(user);
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form className="" onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input 
                type="email" 
                name="username"
                id="defaultFormLoginEmailEx" 
                className="form-control" 
                value={this.state.username}
                onChange={this.onChange}
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input 
                type="password" 
                name="password" 
                id="defaultFormLoginPasswordEx" 
                className="form-control" 
                value={this.state.password}
                onChange={this.onChange}
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
               {/* <MDBBtn color="indigo" type="submit" onClick={<SignUp />}>SignUp</MDBBtn>} */}
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

LogIn.propTypes = {
  logIn: PropTypes.func.isRequired
};

export default connect(null, { logIn })(LogIn);
