function hasTargetSum(array, target) {
  for( let i = 0; i < array.length; i++){
    const complement = target - array[i]
    for( let j = i+1; j<array.length; j++){
         if(array[j]===complement){
        return true}
      }
    }
  return false

}
  // Write your algorithm here


/* 
  Write the Big O time comple O(n**2) xity of your function here
*/

/* 
let i = 0
while (i<array.length){
sum= 0
}
})
  array.forEach(element=>{
    element})
*/

/*
  take each element, add to each element, compare each to second parameter
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
