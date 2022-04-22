//1 Given an array of numbers which is almost sorted in ascending order.  Find the index
//where sorting order is violated.

function checkArr(newArr){
    let index
function check(el,i,arr){
    if(el>arr[i-1]||i==0){
    return true
  }else{
    index=i
  }
}
    if(newArr.every(check)){
    console.log(-1)
}else{
    console.log(index)
}
}
let arr1=[1,2,3,7,8,0]
let result=checkArr(arr1);

//2-rd exanak
function checkArr(newArr){
    let index
    function check(el,i,arr){
        if(i!==0){
          if(el<arr[i-1]){
        index=i
        return true
      }
    }
   }
    return newArr.indexOf(newArr.find(check),index)
};
let arr1=[1,2,3,-4,-5,0];
let result=checkArr(arr1);
console.log(result)

//2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
//Find sum of each row and print them as an array

function newArr(arr){
    let arrFromSum=arr.map(function(el){
        let sum=0
        for(let key in el){
            sum+=el[key]
        }
        return sum
    });
    return arrFromSum
};
let arr1=[[1,2,3,],[1,-3,5],[2,-4]];
let result=newArr(arr1);
console.log(result)

//3. Given an array of integers. Write a function that return new array from first array,
//where removed even numbers, and odd numbers was multiplied with new array length

function newArr(arr){
    function a(el){
       return el%2>0
    }
    function b(el){
        return el*arr.filter(a).length;  
    };
   return arr.filter(a).map(b);    
};
let arr1=[2,4,6,5,7];
let result=newArr(arr1);
console.log(result)

//4 Given a number. Write a function that calculates its sum of the digits and if that sum
//has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
//return the result.

function sumDigits(num){
    let sum=0;
   while(num/10!=0){
        sum+=num%10;
        num=(num-num%10)/10
        if(num==0&&sum%100>9){
            num=sum;
            sum=0
        }
    }
    return sum
};
let num1=+prompt()
let result1=sumDigits(num1);
console.log(result1)

//5. Write a recursive function which receives  a number as arguments and returns the
//fibonacci sequence as array.

function newArr(n){
let arr=[]
function numFibonacci(num){;    
    if(num>0){
        if(arr[0]==undefined||arr[1]==undefined){
            arr.push(1);
            numFibonacci(num-1)
            
        }else{
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
        numFibonacci(num-1)
      }
    }
 }
 numFibonacci(n)
 return arr
};
let result=newArr(20);
console.log(result)