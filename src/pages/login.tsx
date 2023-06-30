import LoginForm from "../components/LoginForm";
import Main from "../layouts/Main";

interface Props {
}

const Login = ({ }: Props) => {
    return(
        <Main title='Login'>
            <LoginForm />
        </Main>
    )
}
export default Login;