import goalCalc from '../lib/goalCalc';

test('goal calculator with correct value', () => {
    let goal = goalCalc(
        new Date("10/1/25"),
        30000,
        new Date("10/1/23")
    )
    expect(goal).toBe(1250);
})

test('goal calculator with wrong value', () => {
    let goal = goalCalc(
        new Date("10/1/22"),
        30000,
        new Date("10/1/23")
    )
    expect(goal).toBe('');
})