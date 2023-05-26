const list = [2, 6, 3, 7, 9];

// 4 - Sum only the ODD numbers in the list
const oddSum = list.reduce((sum, num) => {
    if (num % 2 !== 0) {
        return sum + num;
    }
    return sum;
}, 0);
console.log(oddSum);

// 5 - Sort the list highest to lowest
const sortedList = list.sort((a, b) => b - a);
console.log(sortedList);

// 6 - Print the numbers in a ~ delimited string like '1~2~3'
const delimitedString = list.join('~');
console.log(delimitedString);
