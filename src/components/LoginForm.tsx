import {TextInput, PasswordInput, Button, Group, Box, Stack, Alert} from '@mantine/core';
import { useForm } from '@mantine/form';
import LoginAction from '../actions/login';
import { useDisclosure } from '@mantine/hooks';
import Link from "next/link";
import {useState} from "react";
import Router from "next/router";

interface Props {

}
const LoginForm = ( {}: Props ) => {
    const form = useForm({
        initialValues: {
            username: '',
            password: '',
        },

        validate: {
            password:  (value) => null,
            username: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    const [visible, { toggle }] = useDisclosure(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState('');
    const onSubmit = (values: {username: string, password: string}) => {
        LoginAction( values.username, values.password, (res) => {
            Router.push( { pathname: '/' } )
        }, (e) => {
            setHasError(true)
            setError(e?.message)
        } )
    }
    return (
        <Box>
            {hasError && <Alert mb={10} title="Error!" color="red">
                {error}
            </Alert>}
            <form onSubmit={form.onSubmit((values) => onSubmit({
                username: values.username, password: values.password
            }))}>
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="Email"
                    {...form.getInputProps('username')}
                />

                <PasswordInput
                    withAsterisk
                    label="Password"
                    placeholder="Password"
                    mt="md"
                    visible={visible}
                    onVisibilityChange={toggle}
                    {...form.getInputProps('password')}
                />

                <Group sx={{justifyContent: 'space-between'}} mt="md">
                    <Link href="/signup">Signup</Link>
                    <Button type="submit">Login</Button>

                </Group>
            </form>
        </Box>
    );
}
export default LoginForm;