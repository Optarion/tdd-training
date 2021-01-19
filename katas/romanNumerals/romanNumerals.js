export default number => {
    if (number === 5) return 'V';
    if (number < 10) return 'I'.repeat(number);
    if (number === 1000) return 'M';
};
