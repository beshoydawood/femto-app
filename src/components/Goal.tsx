import {Box, Grid, Text} from "@mantine/core";

interface Props {
    goal: {
        created_on: string | number,
        amount: number,
        goalDate: string | number,
        goalValue: number
    }
}

const Goal = ({goal}: Props ) => {
    const goalCreated = new Date(goal?.created_on);
    const goalDate = new Date(goal?.goalDate);
    const valColumn = ( text, value ) => {
        return(
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <Text fw={700} mr={5}>{text}:</Text> {value}
            </Box>
        )
    }
    return(
        <Box sx={{
            border: '1px solid #e5e5e5',
            marginBottom: '20px',
            padding: '15px',
            borderRadius: '5px',
            background: '#fff'
        }}>
            <Box sx={{display: 'flex'}}>
                <Text fw={700} mr={5} mb={10}>Created On:</Text>
                {goalCreated.toLocaleDateString()}
            </Box>
            <Grid>
                <Grid.Col span={6}>
                    {valColumn('Amount', goal?.amount )}
                </Grid.Col>
                <Grid.Col span={6}>
                    {valColumn('Date to reach goal ', goalDate.toLocaleDateString() )}
                </Grid.Col>
                <Grid.Col span={12}>
                    {valColumn('Monthly amount ', <Text c="blue">{Math.floor(goal?.goalValue)}</Text> )}
                </Grid.Col>
            </Grid>
        </Box>
    )
}
export default Goal