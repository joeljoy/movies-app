import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'

class Header extends Component{
  render(){
    return(
      <div className="app-header">
        <img className="app-logo" src={logo} alt="logo"></img>
        <Button className="login-button" variant="contained" color="default">
          Login
        </Button>
      </div>
    )
  }
}

export default Header;
