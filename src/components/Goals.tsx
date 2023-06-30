import {Box, Title} from "@mantine/core";
import {useEffect, useState} from "react";
import Goal from "./Goal";

interface Props {
    triggered: number
}
const Goals = ( {triggered}: Props ) => {
    const [goals, setGoals] = useState([])
    useEffect( () => {
        let newGoals = []
        try {
            newGoals = JSON.parse(localStorage.getItem('goals'))
        } catch (e) {}
        setGoals( newGoals )
    }, [triggered] )

    return(
        <Box sx={{
            padding: '15px 0'
        }}>
            <Box>
                {!goals?.length ?
                    <Title mb={20} order={6}>You don't have any goals yet</Title>
                    : <>
                    {goals.map( (goal, i) => {
                        return(
                            <Goal key={i} goal={goal} />
                        )
                    } )}
                    </>}
            </Box>
        </Box>
    )
}
export default Goals;