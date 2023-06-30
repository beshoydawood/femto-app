import * as cookie from "cookie";
import ValidateAction from "../actions/validateUser";

const userLogged = async  (_cookies) => {
    let logged = false;
    try {
        const cookies = cookie.parse(_cookies);
        await ValidateAction( JSON.parse(cookies?.user), (e) => {
            logged = true;
        }, (e) => {} )
    } catch (e) {
        logged = false
    }

    return logged;
}
export default userLogged;