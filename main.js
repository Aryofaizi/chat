function findDuplicates(arr) {
    // Your code here
    for(item of arr){
        console.log(item)
    }
  }
  
  // Test the function with an example array
  const arr = [1, 2, 3, 2, 4, 5, 3];
  const duplicates = findDuplicates(arr);
  console.log(duplicates); // should log [2, 3]
  