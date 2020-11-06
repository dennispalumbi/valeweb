import { USER_LOGIN,USER_LOGOUT,ATTEMPT,FAILURE } from "../constants";
import {postRequest} from '../../utility/net/urls'
export const loginSuccess = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};

export const authLoginAction = (value) => (dispatch,getState) => {
  console.log("chachs",value)
  postRequest("/auth/checkuser2", value)
      .then( (res) => {
        console.log(res)
          if(res.Token){
            dispatch({
              type: USER_LOGIN,
              payload: res,
            });
          }
          else{
            dispatch({
              type: FAILURE,
              payload:res
            });
          }
          
      }).catch(err=>{
        console.log('Algo pasó al intentar conectar con el servidor.',err)
    })
};
export const authLogoutAction=()=>(dispatch)=>{

    dispatch({
        type: USER_LOGOUT,
       
      });
      return true
}
