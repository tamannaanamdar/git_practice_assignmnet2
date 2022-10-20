// Check whether a number is prime or not
   let num = 5;
   let count = 0;

    for(let i = 0;i<=num;i++){
     if(num%i==0){
      count++;
     }
   }
    if(count==2){
    console.log(num, "is prime");
    else{
     console.log(num, "is not prime");

// Check whether a string is palindrome or not.

   let str = "racecar";
   var new_str = "";
   let N = 7;
   
   for(let i= N;i>=0;i--){
    new_str = new_str + str[i];
   }
   if(str==new_str){
    console.log("Yes");
   } else{
     console.log("No");
   }