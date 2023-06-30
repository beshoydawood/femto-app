import Main from "../layouts/Main";
import {Button, Group, Stack, Box} from "@mantine/core";
import Router, { withRouter } from 'next/router'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import * as cookie from 'cookie'
import userLogged from '../lib/userLogged';
import Home from "../layouts/Home";

type User = {
    logged: boolean
}

interface Props {
    user: User
}

export const getServerSideProps: GetServerSideProps<{
    user: User

}> = async (context) => {
    const cookies = context.req.headers.cookie;
    let logged = await userLogged(cookies);
    const user: User = {logged}
    return { props: { user } }
}

const Index = ({user}: Props) => {

    return(
        <>
            {!user.logged ? <Main title='Welecome to Femto Financial'>
                <Group position="center" >
                    <Button onClick={() => {
                        Router.push( { pathname: '/login' } )
                    }}>Login</Button>
                    <Button onClick={() => {
                        Router.push( { pathname: '/signup' } )
                    }}>Signup</Button>
                </Group>
            </Main>: <Home />}
        </>
    )
}
export default Index;
