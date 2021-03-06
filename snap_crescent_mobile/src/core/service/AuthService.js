import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "..";
import { updateServerUrl } from "../action/serverUrl";
import { getData, postData } from "./ApiService";

const SIGNUP_URL = 'sign-up';
const SIGNIN_URL = 'login';
const SIGN_OUT_URL = "logout";
const RESET_PASSWORD_URL = 'reset-password';
const USER_EXISTS_URL = 'user-exists';

export const signup = (props) => {
    return postData(SIGNUP_URL, props);
}

export const signin = (props) => {
    return postData(SIGNIN_URL, props);
}

export const signOut = (props) => {
    return postData(SIGN_OUT_URL, props).then(res => {
        const serverUrl = store.getState().serverUrl;
        AsyncStorage.clear();
        store.dispatch({ type: 'SIGN_OUT' });
        store.dispatch(updateServerUrl(serverUrl));
        return res;
    });
}

export const resetPassword = (props) => {
    return postData(RESET_PASSWORD_URL, props);
}
export const doesUserExists = () => {
    return getData(USER_EXISTS_URL);
}