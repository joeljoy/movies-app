import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component{
  constructor(){
    super();
    this.state ={
      isOpenModel:false,
      value:0,
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

  handleChange = (event,value) => {
    this.setState({
      value:value
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
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </Modal>
      </div>
    )
  }
}

export default Header;
