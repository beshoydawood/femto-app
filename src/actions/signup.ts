import axios from "axios";
import {API_BASE} from "../routes/path";
const SignUpAction = async (email, password, callback, errorCallback) => {
    await axios({
        method: "POST",
        url: API_BASE.auth.signup,
        data: {
            username: email,
            password: password
        }
    }).then( async (response) => {
        callback(response.data)
    } ).catch((e) => {
        errorCallback(e.response.data)
    })
}

export default SignUpAction;