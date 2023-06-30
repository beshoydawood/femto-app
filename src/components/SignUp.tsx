import { TextInput, PasswordInput, Button, Group, Box, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import SignUpAction from '../actions/signup';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link'
import {useState} from "react";
import { Alert } from '@mantine/core';

interface Props {

}
const SignUp = ( {}: Props ) => {
    const form = useForm({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: ''
        },

        validate: {
            password: (value) => (value.length < 6 ? 'Password must be at least 6 letters' : null),
            confirmPassword:  (value, values) => value !== values.password ? 'Password confirm must be same as password' : null,
            username: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    const [visible, { toggle }] = useDisclosure(false);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState('');
    const [hasDone, setHasDone] = useState(false);

    const onSubmit = (values: {username: string, password: string}) => {
        SignUpAction( values.username, values.password, (res) => {
            setHasDone(true)
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
            {hasDone && <Alert mb={10} title="Congratulations!" color="green">
                Register successful you can log in
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

                <PasswordInput
                    withAsterisk
                    label="Confirm Password"
                    placeholder="Password"
                    mt="md"
                    visible={visible}
                    onVisibilityChange={toggle}
                    {...form.getInputProps('confirmPassword')}
                />

                <Group sx={{justifyContent: 'space-between'}} mt="md">
                    <Link href="/login">Login</Link>
                    <Button type="submit">SignUp</Button>

                </Group>
            </form>
        </Box>
    );
}
export default SignUp;