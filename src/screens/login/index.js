import React,{useState} from 'react';
import {Form,FormControl,Button,NavDropdown,Nav,Navbar} from 'react-bootstrap'
import {View} from 'react-native'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {authLoginAction} from '../../store/actions/authAction'
import { useHistory } from "react-router-dom";
function login({isFetching,userLogin}){
    const [correo, setEmail] = useState("inversionespardel@hotmail.com");
    const [clave, setPassword] = useState("55");
    const history = useHistory();
    const login = (event) => {
      event.preventDefault();
      if(correo!=""&&clave!="")
        userLogin({
          correo,
          clave,
        });
        history.push("/");
    };
    return <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                <Form   onSubmit={login}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    onChange={(v)=> setEmail(v.target.value)} value={correo} />
                  
                  </Form.Group>
                
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    onChange={(v)=>setPassword(v.target.value)} value={clave} />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" onClick={()=>{}} >
                    Submit
                  </Button>
              </Form>
           </View>
}
const mapStateToProps = ({ authStorage, configStorage }) => {
  return {
    isFetching: authStorage.isFetching,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (value) => dispatch(authLoginAction(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(login);
