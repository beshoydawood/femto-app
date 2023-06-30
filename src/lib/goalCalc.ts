const goalCalc = (goalDate, amount, currDate = new Date()) => {
    let months = 0;
    try {
        months = (goalDate.getFullYear()*12 + goalDate.getMonth())
            -
            ( currDate.getFullYear()*12 + currDate.getMonth() )
    } catch (e) {}

    let saving = amount as number / months;

    return saving > 0 && isFinite(saving) ? saving : '';
}
export default goalCalc;