import {Box, Stack, Title, Anchor, Button, Modal} from "@mantine/core";
import GoalBox from "../components/GoalBox";
import Goals from "../components/Goals";
import { useDisclosure } from '@mantine/hooks';
import {useState} from "react";
import {eraseCookie} from "../lib/cookies";

interface Props {

}
const Home = ( {}: Props ) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [triggered, setTriggered] = useState<number>(1)
    const onClose = () => {
        close()
        setTriggered(triggered+1)
    }
    return(
        <Stack maw={550} mt={30} mx="auto">
            <Modal opened={opened} onClose={close} title="Add Goal">
                <GoalBox close={onClose} />
            </Modal>
            <Box sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                borderBottom: '1px solid #e5e5e5'
            }}>
                <Title mb={20} order={1}>My Goals</Title>
                <Anchor onClick={(e) => {
                    e.preventDefault()
                    eraseCookie('user')
                    window.location.href = window.location.href+'';
                }} sx={{marginLeft: 'auto'}} href='#'>
                    Log out
                </Anchor>
            </Box>
            <Goals triggered={triggered} />
            <Button  onClick={open}>Add Goal</Button>

        </Stack>
    )
}
export default Home;