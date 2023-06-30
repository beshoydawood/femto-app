import axios from "axios";
import {API_BASE} from "../routes/path";
const ValidateAction = async (user, callback, errorCallback) => {

    await axios({
        method: "POST",
        url: API_BASE.auth.validate,
        data: {
            username: user.username,
            password: user.password
        }
    }).then( async (response) => {
        callback(response.data)
    } ).catch((e) => {
        errorCallback(e.response.data)
    })
}

export default ValidateAction;