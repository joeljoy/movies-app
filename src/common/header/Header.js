import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal';

class Header extends Component{
  constructor(){
    super();
    this.state ={
      isOpenModel:false,
    };
  }

  openModel = ()=>{
    this.setState({
      isOpenModel : true
    });
  }

  closeModel = ()=>{
    this.setState({
      isOpenModel:false
    });
  }

  render(){
    return(
      <div className="app-header">
        <img className="app-logo" src={logo} alt="logo"></img>
        <Button
          className="login-button"
          variant="contained"
          color="default"
          onClick={this.openModel}>
            Login
        </Button>
        <Modal
          isOpen={this.state.isOpenModel}
          onRequestClose={this.closeModel}
          ariaHideApp={false}
          contentLabel="login"
          shouldCloseOnOverlayClick={false}>
        </Modal>
      </div>
    )
  }
}

export default Header;
