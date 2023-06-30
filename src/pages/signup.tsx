import SignUp from "../components/SignUp";
import Main from "../layouts/Main";
interface Props {
}

const Signup = ({ }: Props) => {
    return(
        <Main title='Join us now'>
            <SignUp />
        </Main>
    )
}
export default Signup;