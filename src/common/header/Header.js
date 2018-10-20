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
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

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
    <Typography component="div" style={{padding:0,textAlign:'center'}}>
        {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children:PropTypes.node.isRequired
}

class Header extends Component{
  constructor(){
    super();
    this.state ={
      isOpenModel:false,
      value:0,
      username:"",
      usernameTintVisible:"dispNone",
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

  loginClickHandler = () => {
    this.state.username === ""?this.setState({usernameTintVisible:"dispBlock"}):this.setState({usernameTintVisible:"dispNone"})
  }

  usernameChangeHandler = (e) => {
    this.setState({
      username:e.target.value
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
          <Tabs className="tabs" value={this.state.value} onChange={this.handleChange}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {
            this.state.value === 0 &&
            <TabContainer>
              <FormControl>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" type="text" username={this.state.username} onChange={this.usernameChangeHandler}/>
                <FormHelperText className={this.state.usernameTintVisible}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl><br/><br/>
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password"/>
              </FormControl><br/><br/>
              <Button onClick={this.loginClickHandler} variant="contained" color="primary">Login</Button>
            </TabContainer>
          }
        </Modal>
      </div>
    )
  }
}

export default Header;
