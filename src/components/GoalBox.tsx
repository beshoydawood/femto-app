import {useEffect, useState} from 'react';
import {NumberInput, Grid , Box, Button, Group } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import goalCalc from "../lib/goalCalc";

interface Props {
    close: any
}

const GoalBox = ( {close}: Props ) => {
    const [amount, setAmount] = useState<number | ''>(0);
    const [goalDate, setGoalDate] = useState<Date | null>(null);
    const [goalValue, setGoalValue] = useState<number | ''>('')

    useEffect( () => {
        setGoalValue( goalCalc(goalDate, amount) )
    }, [amount, goalDate] )

    const addGoal = () => {
        let prevGoals: string | any[] = localStorage.getItem('goals') || [];
        try {
            prevGoals = JSON.parse(prevGoals as string)
        } catch (e) {}
        localStorage.setItem('goals', JSON.stringify([{
            created_on: new Date,
            amount,
            goalDate,
            goalValue
        }, ...prevGoals as any[]]))
        close()
    }

    return(
        <Box>
                <Grid>
                    <Grid.Col span={6}>
                        <NumberInput
                            withAsterisk
                            label="Total amount"
                            value={amount}
                            onChange={setAmount}
                            placeholder="30,000"
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <MonthPickerInput
                            withAsterisk
                            label="Date to reach goal"
                            placeholder="Pick date"
                            value={goalDate}
                            onChange={setGoalDate}
                        />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <NumberInput
                            disabled={true}
                            label="Monthly amount"
                            value={goalValue}
                            placeholder=""
                        />
                    </Grid.Col>
                    <Group sx={{justifyContent: 'space-between', width: '100%'}} mt="md">
                        <div></div>
                        <Button disabled={(goalValue as number <= 0)} onClick={addGoal} sx={{marginLeft: 'auto', marginRight: '5px'}}>Add Goal</Button>
                    </Group>
                </Grid>
        </Box>
    )
}
export default GoalBox;