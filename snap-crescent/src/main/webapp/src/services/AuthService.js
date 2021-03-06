import { postData, getData } from '../utils/ApiUtil';

const SIGNUP_URL = 'sign-up';
const SIGNIN_URL = 'login';
const SIGN_OUT_URL = "logout";
const RESET_PASSWORD_URL = 'reset-password';
const USER_EXISTS_URL = 'user-exists';
const AUTHENTICATION_URL = 'authentication';

export const signup = (props) => {  
  return postData(SIGNUP_URL, props);
}

export const signin = (props) => {  
  return postData(SIGNIN_URL, props);
}

export const signOut = (props) => {
  return postData(SIGN_OUT_URL, props);
}

export const resetPassword = (props) => {  
  return postData(RESET_PASSWORD_URL, props);
}
export const doesUserExists = () => {  
  return getData(USER_EXISTS_URL);
}

export const authenticate = () => {  
  return getData(AUTHENTICATION_URL);
}
