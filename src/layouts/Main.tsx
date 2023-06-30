import {Stack, Box, Title} from "@mantine/core";

interface Props {
    children: any,
    title: string
}
const Main = ( {children, title}: Props ) => {
    return(
        <Box sx={{
            minHeight: '100vh',
            background: '#f1f1f1',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Box sx={{height: '100%',
                width: '100%',
                margin: 'auto',
            }} mx="auto">
                <Box sx={{textAlign: 'center'}}>
                    <Title mb={20} order={1}>{title}</Title>
                </Box>
            <Stack maw={380} mx="auto">
                <Box sx={{
                    padding: '20px',
                    background: '#fff',
                    border: '1px solid #e3e3e3'
                }}>
                    {children}
                </Box>
            </Stack>
            </Box>
        </Box>
    )
}
export default Main