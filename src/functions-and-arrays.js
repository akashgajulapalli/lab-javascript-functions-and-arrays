// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(n1 ,n2){
  if(n1>n2)
    return n1;
  else if(n2>n1)
    return n2;
  else if (n1==n2)
    return n1 ,n2  ;
  
  }
  // Progression #2: The lengthy word
  const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
  function greatestOfTwoNumbers(words){
  if (words.length == 0) {
    return null;
  }
  
  }
  // Progression #3: Net Price
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  function netPrice (numbers){
    let sum = 0
    for(let i = 0 ; i < numbers.length ; i++)
    {
      sum += numbers[i] 
    }
    return sum
  }
  
  
  
  const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
  
  // should return: 463
  
  function add (mixedArr){
    let sum = 0
  for(let i = 0 ; i < mixedArr.length ; i++)
  {
    if (typeof mixedArr[i] == "string") {
    sum = sum+ mixedArr[i].length;
  }
  else if(mixedArr[i]==true){
    sum = sum+1;
  }
  else if(mixedArr[i]==false){
    sum = sum +0;
  }
  else if(typeof mixedArr[i]==="number"){      
      sum = sum + mixedArr[i];      
  }     
  else throw Error("Unsupported data type sir or ma'am");
  }
  return sum;
  }
  
  
  // Progression #4: Calculate the average
  // Progression 4.1: Array of numbers
  const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
  
  // 
  // for(let i = 0 ; i < numbers.length ; i++)
  // {
  //   sum += numbers[i] 
  // }
  // return sum
  // }
  
  function midPointOfLevels (numbersAvg){
    let sum = 0;
    if(numbersAvg.length== 0)
      return null;
    else 
      return add(numbersAvg)/numbersAvg.length ;
      // for(let i=0;i<numbersAvg.length;i++){
        
      //   sum = sum + numbersAvg[i].length;
      // }
      // return sum/numbersAvg.length;
    
    }
  
  // Progression 4.2: Array of strings
  const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
  
  function averageWordLength (wordsArr){
  if (wordsArr.length== 0) {
    return null;
  } else {
    return add(wordsArr)/wordsArr.length;
  }
  }
  
  //Progression #4.3 (Bonus): A generic avg() function
  
  function avg(arr){
    if (arr.length== 0) {
      return null;
    } else {
      return add(arr)/arr.length;
    }
    }
  
  
  // Progression #5: Unique arrays
  const wordsUnique = [
    'bread',
    'jam',
    'milk',
    'egg',
    'flour',
    'oil',
    'rice',
    'coffee powder',
    'sugar',
    'salt',
    'egg',
    'flour'
  ];
  
  function uniqueArray(wordsUnique){
    let arr=[];
    if(wordsUnique.length==0){
      return null;
    }
    else{
      for (let i = 0; i < wordsUnique.length; i++) {
        // const element = array[index];
        if(wordsUnique[i] !=  wordsUnique[i+1]){
          arr[i] = wordsUnique[i];
        }
      }
      return arr;  
    }
  
  }
  
  // Progression #6: Find elements
  const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
  function searchElement(wordsFind,srchdWord){
    if(wordsFind.length==0){
      return null;
    }
    else{
      for(let i=0;i<wordsFind.length;i++){
        if(wordsFind[i]== srchdWord){
          return true;
        }
      }
    }
  }
  
  
  // Progression #7: Count repetition
  const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  
  function howManyTimesElementRepeated(wordsCount, findsWordCount){
    var count = 0;
    if(wordsCount.length==0){
      return 0;
    }
    else{
      for(let i=0;i<wordsCount.length;i++){
        if(wordsCount[i]== findsWordCount){
          count++;
        }
      }
      return count;
    }
  }
  
  // Progression #8: Bonus
  
  const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
  ];