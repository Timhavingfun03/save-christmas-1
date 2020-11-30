
function max(arr) {
    let big 
for (let i = 0; i < arr.length; i++) {  
    if(arr[i] > big){
        big = arr[i]
}}
     return big
}

function min(arr) {
    let smal
for(let i = 0; i < arr.length; i++){
    if(arr[i] < smal){
        smal = arr[i]
    }}
    return smal
}

function mean(arr) {
    // Ledtråd: Börja med att räkna ut summan av alla element
}

let numbers= [1,2,3,4,0,6,7,8,9,10]
console.log(max(numbers))
