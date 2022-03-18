//Complete the solution so that it reverses the string passed into it.


function solution(str){
    let array = str.split('');
    let reverseArray = array.reverse();
    let result = "";
    for (let i = 0; i < reverseArray.length ; i++) {
        result+=reverseArray[i];
    }
    return result;
}