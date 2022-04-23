
//count variable is used to increase the value only if the answer is correct
let counter=0;

//check if the radio button value is equal to answer

function question1option1() {
    

    if (document.querySelector(".q1option1").checked) {
        document.querySelector(".q1option2").disabled = true;  
        document.querySelector(".q1option3").disabled = true;  
        if(document.querySelector(".q1option1").value == Question[0].answer){
            
                counter+=1;
                console.log(counter);
          
        }
      
          
       }
     
       
    }    
    function question1option2() {
        
    
        if (document.querySelector(".q1option2").checked) {
            document.querySelector(".q1option1").disabled = true;  
            document.querySelector(".q1option3").disabled = true;  
           if(document.querySelector(".q1option2").value == Question[0].answer){
           
            
                counter+=1;
                console.log(counter);
           }
           
        }
       
    }   
    
        function question1option3() {
        
    
            if (document.querySelector(".q1option3").checked) {
                document.querySelector(".q1option1").disabled = true;  
                document.querySelector(".q1option2").disabled = true;    
               if(document.querySelector(".q1option3").value == Question[0].answer){
               counter+=1;
               console.log(counter);
            } 
               }
             
            }
           
            

          
    
            function question2option1(){
                if(document.querySelector(".q2option1").checked){ 
                    document.querySelector(".q2option2").disabled = true;  
                    document.querySelector(".q2option3").disabled = true;  
                    if(document.querySelector(".q2option1").value == Question[1].answer){
                        
                            counter+=1;
                            console.log(counter);
                       
                      
                    }
                    }
                    
                }
            

            function question2option2(){
                if(document.querySelector(".q2option2").checked){
                    document.querySelector(".q2option1").disabled = true;  
                    document.querySelector(".q2option3").disabled = true;  
                    if(document.querySelector(".q2option2").value == Question[1].answer){
                        
                            counter+=1;
                            console.log(counter);
                       
                      
                    }
                    }
                    
                }
            

            function question2option3(){
                if(document.querySelector(".q2option3").checked){
                    document.querySelector(".q2option1").disabled = true;  
                    document.querySelector(".q2option2").disabled = true;    
                    if(document.querySelector(".q2option3").value == Question[1].answer){
                      
                            counter+=1;
                            console.log(counter);
                      
                      
                    }
                    }

                }
            

        
            function question3option1(){
                if(document.querySelector(".q3option1").checked){ 
                    document.querySelector(".q3option2").disabled = true;  
                    document.querySelector(".q3option3").disabled = true;  
                    if(document.querySelector(".q3option1").value == Question[2].answer){
                       
                            counter+=1;
                            console.log(counter);
                      
                        }
                }
                    
                }
            

            function question3option2(){
                if(document.querySelector(".q3option2").checked){
                    document.querySelector(".q3option1").disabled = true;    
                    document.querySelector(".q3option3").disabled = true;  
                    if(document.querySelector(".q3option2").value == Question[2].answer){
                        
                            counter+=1;
                            console.log(counter);
                       
                    }
                    }
                            
                }
            

            function question3option3(){
                if(document.querySelector(".q3option3").checked){
                    document.querySelector(".q3option1").disabled = true;  
                    document.querySelector(".q3option2").disabled = true;    
                    if(document.querySelector(".q3option3").value == Question[2].answer){
                       
                            counter+=1;
                            console.log(counter);
                      
                        
                    }
                    }
                      
                }
            

            function question4option1(){
                if(document.querySelector(".q4option1").checked){
                    document.querySelector(".q4option2").disabled = true;  
                    document.querySelector(".q4option3").disabled = true;  
                    if(document.querySelector(".q4option1").value == Question[3].answer){
                       
                            counter+=1;
                            console.log(counter);
                       
                    }
                    }
                    
                }
            

            function question4option2(){
                if(document.querySelector(".q4option2").checked){
                    document.querySelector(".q4option1").disabled = true;    
                    document.querySelector(".q4option3").disabled = true;  
                    if(document.querySelector(".q4option2").value == Question[3].answer){
                       
                            counter+=1;
                            console.log(counter);
                       
                    }
                    }
                    
                }
            

            function question4option3(){
                if(document.querySelector(".q4option3").checked){
                    document.querySelector(".q4option1").disabled = true;  
                    document.querySelector(".q4option2").disabled = true;  
                    if(document.querySelector(".q4option3").value == Question[3].answer){
                        
                            counter+=1;
                            console.log(counter);
                      
                    }
                    }
                       
                }
            

            function question5option1(){
                if(document.querySelector(".q5option1").checked){ 
                    document.querySelector(".q5option2").disabled = true;  
                    document.querySelector(".q5option3").disabled = true;  
                    if(document.querySelector(".q5option1").value == Question[4].answer){
                       
                            counter+=1;
                            console.log(counter);
                       
                    }
                    }
                    
                }
            

            function question5option2(){
                if(document.querySelector(".q5option2").checked){
                    document.querySelector(".q5option1").disabled = true;  
                    document.querySelector(".q5option3").disabled = true;  
                    if(document.querySelector(".q5option2").value == Question[4].answer){
                        
                            counter+=1;
                            console.log(counter);
                       
                    }
                    }
                    
                }
            

            function question5option3(){
                if(document.querySelector(".q5option3").checked){
                    document.querySelector(".q5option1").disabled = true;  
                    document.querySelector(".q5option2").disabled = true;  
                    if(document.querySelector(".q5option3").value == Question[4].answer){
                        
                            counter+=1;
                            console.log(counter);
                       
                    }
                    }
                     
                }
            

    //Question6

    function question6option1(){
        if(document.querySelector(".q6option1").checked){ 
            document.querySelector(".q6option2").disabled = true;  
            document.querySelector(".q6option3").disabled = true;  
            if(document.querySelector(".q6option1").value == Question[5].answer){
               
                    counter+=1;
                    console.log(counter);
               
            }
            }
              
        }
    

    function question6option2(){
        if(document.querySelector(".q6option2").checked){
            document.querySelector(".q6option1").disabled = true;    
            document.querySelector(".q6option3").disabled = true;  
            if(document.querySelector(".q6option2").value == Question[5].answer){
               
                    counter+=1;
                    console.log(counter);
                
            }
            }

                }
               
        
    

    function question6option3(){
        if(document.querySelector(".q6option3").checked){
            document.querySelector(".q6option1").disabled = true;  
            document.querySelector(".q6option2").disabled = true;   
            if(document.querySelector(".q6option3").value == Question[5].answer){
               
                    counter+=1;
                    console.log(counter);
               
            }
            }

                }
                
        
    

    function question7option1(){
        if(document.querySelector(".q7option1").checked){ 
            document.querySelector(".q7option2").disabled = true;  
            document.querySelector(".q7option3").disabled = true;  
            if(document.querySelector(".q7option1").value == Question[6].answer){
              
                    counter+=1;
                    console.log(counter);
               
            }
            }
               
        }
    

    function question7option2(){
        if(document.querySelector(".q7option2").checked){
            document.querySelector(".q7option1").disabled = true;   
            document.querySelector(".q7option3").disabled = true;  
            if(document.querySelector(".q7option2").value == Question[6].answer){
              
                    counter+=1;
                    console.log(counter);
               
              
        }
    }

}
    
    
    function question7option3(){
        if(document.querySelector(".q7option3").checked){
            document.querySelector(".q7option1").disabled = true;  
            document.querySelector(".q7option2").disabled = true;   
            if(document.querySelector(".q7option3").value == Question[6].answer){
               
                    counter+=1;
                    console.log(counter);
              
              
        }
    }
   
}
    

    function question8option1(){
        if(document.querySelector(".q8option1").checked){
            document.querySelector(".q8option2").disabled = true;  
            document.querySelector(".q8option3").disabled = true;  
            if(document.querySelector(".q8option1").value == Question[7].answer){
               
                    counter+=1;
                    console.log(counter);
               
            }
            }
                
        }
    

    function question8option2(){
        if(document.querySelector(".q8option2").checked){
            document.querySelector(".q8option1").disabled = true;   
            document.querySelector(".q8option3").disabled = true;  
            if(document.querySelector(".q8option2").value == Question[7].answer){
              
                    counter+=1;
                    console.log(counter);
               
            }
        }
            
               
            }
    
    

    function question8option3(){
        if(document.querySelector(".q8option3").checked){
            document.querySelector(".q8option1").disabled = true;  
            document.querySelector(".q8option2").disabled = true;  
            if(document.querySelector(".q8option3").value == Question[7].answer){
               
                    counter+=1;
                    console.log(counter);
               
            }
        }
            
        }
    

    function question9option1(){
        if(document.querySelector(".q9option1").checked){ 
            document.querySelector(".q9option2").disabled = true;  
            document.querySelector(".q9option3").disabled = true;  
            if(document.querySelector(".q9option1").value == Question[8].answer){
               
                    counter+=1;
                    console.log(counter);
               
            }
            }
               
        }
    

    function question9option2(){
        if(document.querySelector(".q9option2").checked){
            document.querySelector(".q9option1").disabled = true;  
            document.querySelector(".q9option3").disabled = true;  
            if(document.querySelector(".q9option2").value == Question[8].answer){
                
                    counter+=1;
                    console.log(counter);
                
            }
            }
              
        }
    

    function question9option3(){
        if(document.querySelector(".q9option3").checked){
            document.querySelector(".q9option1").disabled = true;  
            document.querySelector(".q9option2").disabled = true;  
            if(document.querySelector(".q9option3").value == Question[8].answer){
              
                    counter+=1;
                    console.log(counter);
               
               
            }
            }
    
        }
    

    function question10option1(){
        if(document.querySelector(".q10option1").checked){
            document.querySelector(".q10option2").disabled = true;  
            document.querySelector(".q10option3").disabled = true; 
            if(document.querySelector(".q10option1").value == Question[9].answer){
               
                    counter+=1;
                    console.log(counter);
               
            }
            }
              
        }
    

    function question10option2(){
        if(document.querySelector(".q10option2").checked){
            document.querySelector(".q10option1").disabled = true;   
            document.querySelector(".q10option3").disabled = true; 
            if(document.querySelector(".q10option2").value == Question[9].answer){
               
                    counter+=1;
                    console.log(counter);
               
            }
            }
                
        }
    

    function question10option3(){
        if(document.querySelector(".q10option3").checked){
            document.querySelector(".q10option1").disabled = true;  
            document.querySelector(".q10option2").disabled = true;  
            if(document.querySelector(".q10option3").value == Question[9].answer){
               
                    counter+=1;
                    console.log(counter);
               
            }
            }
                
        }
    

    function result(){
       
    
        if(counter == 10){
            document.getElementById('results').innerHTML=counter;
            document.getElementById('grade').innerHTML="Oustanding Performance";
           
        }
        else if(counter == 9){
            document.getElementById('results').innerHTML=counter;
            document.getElementById('grade').innerHTML="Excellent Performance";
           
           
        }
        else if(counter == 8){

            document.getElementById('results').innerHTML=counter;         
            document.getElementById('grade').innerHTML="Well Done";
          
        }
        else if(counter == 7){
            document.getElementById('results').innerHTML=counter;         
            document.getElementById('grade').innerHTML="Good";
        }
        else if(counter == 6){
            document.getElementById('results').innerHTML=counter;
            document.getElementById('grade').innerHTML="Above Average";
        }
        else if(counter == 5){
            document.getElementById('results').innerHTML=counter;
            document.getElementById('grade').innerHTML="Average";
        }
        else if(counter == 4){
            document.getElementById('results').innerHTML=counter;
            document.getElementById('grade').innerHTML="Below Average";
        }
        else{
            document.getElementById('results').innerHTML=counter;
            document.getElementById('grade').innerHTML="Failed";
            document.getElementById('grade').style.color="red";

        }

    }
    
    

//Display all the answers
    function showAnswer(){

        document.getElementById("q1").innerHTML=Question[0].answer;
        document.getElementById("q2").innerHTML=Question[1].answer;
        document.getElementById("q3").innerHTML=Question[2].answer;
        document.getElementById("q4").innerHTML=Question[3].answer;
        document.getElementById("q5").innerHTML=Question[4].answer;
        document.getElementById("q6").innerHTML=Question[5].answer;
        document.getElementById("q7").innerHTML=Question[6].answer;
        document.getElementById("q8").innerHTML=Question[7].answer;
        document.getElementById("q9").innerHTML=Question[8].answer;
        document.getElementById("q10").innerHTML=Question[9].answer;
       
    }
    showAnswer();
   
    