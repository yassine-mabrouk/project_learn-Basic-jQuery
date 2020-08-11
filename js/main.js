// retirement function
function retirementYear(){
   
  //Question 1 How old are you?
  var age=document.getElementById('Age').value;
  
  
    //Question 2 How old do you want to be when you retire?
  var retirementAge = document.getElementById('retirementAge').value;
  
  // if equal or less then 100

     
 var retirement = retirementAge - age;
 var result = new Date().getFullYear() + retirement;
//Show the results

 if (retirement<0) {
        document.getElementById('finalScoreText').innerHTML = "Erreur";
      document.getElementById('retire').innerHTML = "retirement date  is less than your age" ;
    
 
 }else{

document.getElementById('finalScoreText').innerHTML = "Your are "+ age + " years old. " ;
document.getElementById('retire').innerHTML = "You want to be " + retirementAge + " years old when you retire." ;
document.getElementById('result').innerHTML = "In " + result + " you can retire.";
 }
}
// Display 
$(document).ready(function(){
  
    $(".btn2").click(function(){
        $(".test").show();
    });
});

