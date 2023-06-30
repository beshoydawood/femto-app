import axios from "axios";
import {API_BASE} from "../routes/path";
import setCookie from "../lib/cookies";

const LoginAction = async (email, password, callback, errorCallback) => {
    await axios({
        method: "POST",
        url: API_BASE.auth.login,
        data: {
            username: email,
            password: password
        }
    }).then( async (response) => {
        setCookie( 'user', JSON.stringify(response.data), 1 );
        callback(response.data)
    } ).catch((e) => {
        errorCallback(e.response.data)
    })
}

export default LoginAction;