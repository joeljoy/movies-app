import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const TabContainer = function(props){
  return(
    <Typography component="div" style={{padding:0}}>
        {props.children}
    </Typography>
  )
}

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
          shouldCloseOnOverlayClick={false}
          style={customStyles}>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          <TabContainer>
            <FormControl>
              <InputLabel htmlFor="userName">Username</InputLabel>
              <Input id="username" type="text"/>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password"/>
            </FormControl>
          </TabContainer>
        </Modal>
      </div>
    )
  }
}

export default Header;
