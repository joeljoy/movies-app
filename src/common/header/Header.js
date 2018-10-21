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
import ReactDOM from 'react-dom';
import BookShow from '../../screens/bookshow/BookShow';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const TabContainer = function(props) {
  return (<Typography component="div" style={{
      padding: 0,
      textAlign: 'center'
    }}>
    {props.children}
  </Typography>)
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpenModel: false,
      value: 0,
      username: "",
      usernameTintVisible: "dispNone",
      password: "",
      passwordTintVisisble: "dispNone",
      firstname: "",
      firstnameRequired: "dispNone",
      lastname: "",
      lastnameRequired: "dispNone",
      email: "",
      emailRequired: "dispNone",
      registerPassword: "",
      registerPasswordRequired: "dispNone",
      contact: "",
      contactRequired: "dispNone"
    };
  }

  bookShowHandler = (e) => {
    ReactDOM.render(<BookShow/>, document.getElementById('root'));
  }

  openModel = () => {
    this.setState({isOpenModel: true});
  }

  closeModel = () => {
    this.setState({isOpenModel: false, usernameTintVisible: "dispNone", passwordTintVisisble: "dispNone", value: 0});
  }

  handleChange = (event, value) => {
    this.setState({value: value});
  }

  loginClickHandler = () => {
    this.state.username === ""
      ? this.setState({usernameTintVisible: "dispBlock"})
      : this.setState({usernameTintVisible: "dispNone"})
    this.state.password === ""
      ? this.setState({passwordTintVisisble: "dispBlock"})
      : this.setState({passwordTintVisisble: "dispNone"})
  }

  usernameChangeHandler = (e) => {
    this.setState({username: e.target.value});
  }

  passwordChangeHandler = (e) => {
    this.setState({password: e.target.value});
  }

  firstnameChangeHandler = (e) => {
    this.setState({firstname: e.target.value});
  }

  lastnameChangeHandler = (e) => {
    this.setState({lastname: e.target.value});
  }

  emailChangeHandler = (e) => {
    this.setState({email: e.target.value});
  }

  registerPasswordChangeHandler = (e) => {
    this.setState({registerPassword: e.target.value});
  }

  contactChangeHandler = (e) => {
    this.setState({contact: e.target.value});
  }

  registerClickHandler = () => {
    this.state.firstname === ""
      ? this.setState({firstnameRequired: "dispBlock"})
      : this.setState({firstnameRequired: "dispNone"})
    this.state.lastname === ""
      ? this.setState({lastnameRequired: "dispBlock"})
      : this.setState({lastnameRequired: "dispNone"})
    this.state.email === ""
      ? this.setState({emailRequired: "dispBlock"})
      : this.setState({emailRequired: "dispNone"})
    this.state.registerPassword === ""
      ? this.setState({registerPasswordRequired: "dispBlock"})
      : this.setState({registerPasswordRequired: "dispNone"})
    this.state.contact === ""
      ? this.setState({contactRequired: "dispBlock"})
      : this.setState({contactRequired: "dispNone"})
  }

  render() {
    return (<div className="app-header">
      <img className="app-logo" src={logo} alt="logo"></img>
      <Button className="login-button" variant="contained" color="default" onClick={this.openModel}>
        Login
      </Button>
      {
        this.props.showBookShowButton === "true"
          ? <div className="bookshow-button">
              <Button variant="contained" color="primary" onClick={this.bookShowHandler}>
                Book Show
              </Button>
            </div>
          : ""
      }
      <Modal isOpen={this.state.isOpenModel} onRequestClose={this.closeModel} ariaHideApp={false} contentLabel="login" shouldCloseOnOverlayClick={false} style={customStyles}>
        <Tabs className="tabs" value={this.state.value} onChange={this.handleChange}>
          <Tab label="Login"/>
          <Tab label="Register"/>
        </Tabs>
        {
          this.state.value === 0 && <TabContainer>
              <FormControl>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" type="text" username={this.state.username} onChange={this.usernameChangeHandler}/>
                <FormHelperText className={this.state.usernameTintVisible}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl><br/><br/>
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password" password={this.state.password} onChange={this.passwordChangeHandler}/>
                <FormHelperText className={this.state.passwordTintVisisble}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl><br/><br/>
              <Button onClick={this.loginClickHandler} variant="contained" color="primary">Login</Button>
            </TabContainer>
        }
        {
          this.state.value === 1 && <TabContainer>
              <FormControl>
                <InputLabel htmlFor="firstname">First Name*</InputLabel>
                <Input id="firstname" type="text" username={this.state.firstname} onChange={this.firstnameChangeHandler}/>
                <FormHelperText className={this.state.firstnameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl><br/><br/>
              <FormControl>
                <InputLabel htmlFor="Lastname">Last Name*</InputLabel>
                <Input id="lastname" type="text" username={this.state.lastname} onChange={this.lastnameChangeHandler}/>
                <FormHelperText className={this.state.lastnameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl><br/><br/>
              <FormControl>
                <InputLabel htmlFor="email">Email*</InputLabel>
                <Input id="email" type="email" username={this.state.email} onChange={this.emailChangeHandler}/>
                <FormHelperText className={this.state.emailRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl><br/><br/>
              <FormControl>
                <InputLabel htmlFor="register_password">Password*</InputLabel>
                <Input id="register_password" type="password" username={this.state.registerPassword} onChange={this.registerPasswordChangeHandler}/>
                <FormHelperText className={this.state.registerPasswordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl><br/><br/>
              <FormControl>
                <InputLabel htmlFor="contact">Contact*</InputLabel>
                <Input id="contact" type="tel" username={this.state.contact} onChange={this.contactChangeHandler}/>
                <FormHelperText className={this.state.contactRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl><br/><br/>
              <Button onClick={this.registerClickHandler} variant="contained" color="primary">Register</Button>
            </TabContainer>
        }
      </Modal>
    </div>)
  }
}

export default Header;
