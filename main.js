function findDuplicates(arr) {
    // Your code here
    let duplicates = [];
    for(item of arr){
        let counter = 0;
        for(value of arr){
            if(value == item){
                counter ++;
            }
            if(counter >1 && !duplicates.includes(item)){
                duplicates.push(item);
            }
        }
    }
    return duplicates;
  }
  
  // Test the function with an example array
  const arr = [1, 2, 3, 2, 4, 5, 3];
  const duplicates = findDuplicates(arr);
  console.log(duplicates); // should log [2, 3]
  