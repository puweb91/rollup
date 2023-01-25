export default function() {
    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = _.map(numbers, (n) => n * n);
    console.log(squaredNumbers); // [1, 4, 9, 16, 25]
}