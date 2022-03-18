//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    let array = x.split('');
    let result = '';

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== ' ') {
            result += array[i];
        }
    }
    return result;
}