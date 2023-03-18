// Coding Challange
const date1 = [17, 21, 23]
const date2 = [12, 5, -5, 0, 4]

function printForecast(arr) {
    let str = ''
    for(let i = 0; i < arr.length; i++) {
        str += `${arr[i]}C in ${i + 1} days `
    }
    return str
}
console.log(printForecast(date1))
console.log(printForecast(date2))