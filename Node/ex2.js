function average(arr){
   var count = 0;
   var sum = 0;
   arr.forEach(element => {
      count++;
      sum += element;
   });
   return Math.round(sum / count);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var test = [1,2,3,4,5];

console.log(average(scores));
console.log(average(test));