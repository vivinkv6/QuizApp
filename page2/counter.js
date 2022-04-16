
//count variable is used to increase the value only if the answer is correct
let counter=0;

//check if the radio button value is equal to answer

function question1option1() {
    

    if (document.querySelector(".q1option1").checked) {
       if(document.querySelector(".q1option1").value == Question[0].answer){
         counter=1;
         console.log(counter);
       }
       else{
          console.log(counter);
           }
          
       }
      
       }
      
    
    
    
    function question1option2() {
        
    
        if (document.querySelector(".q1option2").checked) {
           if(document.querySelector(".q1option2").value == Question[0].answer){
               counter=1;
            console.log(counter);
           
           }
           else{
               console.log(counter);
           }
           
        }
       
        }
    
        function question1option3() {
        
    
            if (document.querySelector(".q1option3").checked) {
               if(document.querySelector(".q1option3").value == Question[0].answer){
                   counter=1;
                console.log(counter);
             
               }
               else{
                console.log(counter);
               }
             
            }
           
            }

          
    
            function question2option1(){
                if(document.querySelector(".q2option1").checked){
                    if(document.querySelector(".q2option1").value == Question[1].answer){
                        if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=1;
                            console.log(counter)
                        }
                    }
                        else{
                           console.log(counter);
    
                        }
             
                    
                }
            }

            function question2option2(){
                if(document.querySelector(".q2option2").checked){
                    if(document.querySelector(".q2option2").value == Question[1].answer){
                        if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=1;
                            console.log(counter)
                        }
                    }
                        else{
                            console.log(counter);
                        }

                    
                }
            }

            function question2option3(){
                if(document.querySelector(".q2option3").checked){
                    if(document.querySelector(".q2option3").value == Question[1].answer){
                        if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=1;
                            console.log(counter)
                        }
                    }
                        else{
                            console.log(counter);
    
                        }
                      
                }
            }

        
            function question3option1(){
                if(document.querySelector(".q3option1").checked){
                    if(document.querySelector(".q3option1").value == Question[2].answer){
                        if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=0;
                            console.log(counter)
                        }
                    }
                        else{
                            console.log(counter);
    
                        }
            
                    
                }
            }

            function question3option2(){
                if(document.querySelector(".q3option2").checked){
                    if(document.querySelector(".q3option2").value == Question[2].answer){
                        if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=0;
                            console.log(counter)
                        }
                    }
                        else{
                           console.log(counter);
    
                        }
                       
                    
                }
            }

            function question3option3(){
                if(document.querySelector(".q3option3").checked){
                    if(document.querySelector(".q3option3").value == Question[2].answer){
                        if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter)
                        }
                        else{
                            counter=0;
                            console.log(counter);
                        }
                    }
                        else{
                           console.log(counter);
    
                        }
                      
                }
            }

            function question4option1(){
                if(document.querySelector(".q4option1").checked){
                    if(document.querySelector(".q4option1").value == Question[3].answer){
                        if(counter == 3){
                            counter=4;
                            console.log(counter);
                        }
                        else if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=0;
                            console.log(counter)
                        }
                    }
                        else{
                           console.log(counter);
    
                        }
              
                    
                }
            }

            function question4option2(){
                if(document.querySelector(".q4option2").checked){
                    if(document.querySelector(".q4option2").value == Question[3].answer){
                        if(counter == 3){
                            counter=4;
                            console.log(counter);
                        }
                        else if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }

                        else{
                            counter=0;
                            console.log(counter)
                        }
                    }
                        else{
                            console.log(counter);
    
                        }
                      
                    
                }
            }

            function question4option3(){
                if(document.querySelector(".q4option3").checked){
                    if(document.querySelector(".q4option3").value == Question[3].answer){
                        if(counter == 3){
                            counter=4;
                            console.log(counter);
                        }
                        else if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=0;
                            console.log(counter)
                        }
                    }
                        else{
                            console.log(counter);
                        }
                       
                }
            }

            function question5option1(){
                if(document.querySelector(".q5option1").checked){
                    if(document.querySelector(".q5option1").value == Question[4].answer){
                        if(counter == 4){
                            counter=5;
                            console.log(counter);
                        }
                        else if(counter == 3){
                            counter=4;
                            console.log(counter);
                        }
                        else if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=0;
                            console.log(counter)
                        }
                    }
                        else{
                            console.log(counter);
    
                        }
               
                    
                }
            }

            function question5option2(){
                if(document.querySelector(".q5option2").checked){
                    if(document.querySelector(".q5option2").value == Question[4].answer){
                        if(counter == 4){
                            counter=5;
                            console.log(counter);
                        }
                        else if(counter == 3){
                            counter=4;
                            console.log(counter);
                        }
                        else if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=0;
                            console.log(counter)
                        }
                    }
                        else{
                            console.log(counter);
    
                        }
                       
                    
                }
            }

            function question5option3(){
                if(document.querySelector(".q5option3").checked){
                    if(document.querySelector(".q5option3").value == Question[4].answer){
                        if(counter == 4){
                            counter=5;
                            console.log(counter);
                        }
                        else if(counter == 3){
                            counter=4;
                            console.log(counter);
                        }
                        else if(counter == 2){
                            counter=3;
                            console.log(counter);
                        }
                        else if(counter == 1){
                            counter=2;
                            console.log(counter);
                        }
                        else{
                            counter=0;
                            console.log(counter)
                        }
                    }
                        else{
                            console.log(counter);
    
                        }
                     
                }
            }

    //Question6

    function question6option1(){
        if(document.querySelector(".q6option1").checked){
            if(document.querySelector(".q6option1").value == Question[5].answer){
                if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
              
        }
    }

    function question6option2(){
        if(document.querySelector(".q6option2").checked){
            if(document.querySelector(".q6option2").value == Question[5].answer){
                if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }

                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
               
        }
    }

    function question6option3(){
        if(document.querySelector(".q6option3").checked){
            if(document.querySelector(".q6option3").value == Question[5].answer){
                if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
                
        }
    }

    function question7option1(){
        if(document.querySelector(".q7option1").checked){
            if(document.querySelector(".q7option1").value == Question[6].answer){
                if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
               
        }
    }

    function question7option2(){
        if(document.querySelector(".q7option2").checked){
            if(document.querySelector(".q7option2").value == Question[6].answer){
                if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }

                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
              
        }
    }
    
    function question7option3(){
        if(document.querySelector(".q7option3").checked){
            if(document.querySelector(".q7option3").value == Question[6].answer){
                if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
              
        }
    }

    function question8option1(){
        if(document.querySelector(".q8option1").checked){
            if(document.querySelector(".q8option1").value == Question[7].answer){
                if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
               else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
                
        }
    }

    function question8option2(){
        if(document.querySelector(".q8option2").checked){
            if(document.querySelector(".q8option2").value == Question[7].answer){
                if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
                else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
               
        }
    }

    function question8option3(){
        if(document.querySelector(".q8option3").checked){
            if(document.querySelector(".q8option3").value == Question[7].answer){
                if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
                else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
              
        }
    }

    function question9option1(){
        if(document.querySelector(".q9option1").checked){
            if(document.querySelector(".q9option1").value == Question[8].answer){
                if(counter == 8){
                    counter=9;
                    console.log(counter);
                }
                else if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
                else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
               
        }
    }

    function question9option2(){
        if(document.querySelector(".q9option2").checked){
            if(document.querySelector(".q9option2").value == Question[8].answer){
                if(counter == 8){
                    counter=9;
                    console.log(counter);
                }
                else if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
                else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
              
        }
    }

    function question9option3(){
        if(document.querySelector(".q9option3").checked){
            if(document.querySelector(".q9option3").value == Question[8].answer){
                if(counter == 8){
                    counter=9;
                    console.log(counter);
                }
                else if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
                else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
               
        }
    }

    function question10option1(){
        if(document.querySelector(".q10option1").checked){
            if(document.querySelector(".q10option1").value == Question[9].answer){
                if(counter == 9){
                    counter=10;
                    console.log(counter);
                }
                else if(counter == 8){
                    counter=9;
                    console.log(counter);
                }
                else if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
                else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
              
        }
    }

    function question10option2(){
        if(document.querySelector(".q10option2").checked){
            if(document.querySelector(".q10option2").value == Question[9].answer){
                if(counter == 9){
                    counter=10;
                    console.log(counter);
                }
                else if(counter == 8){
                    counter=9;
                    console.log(counter);
                }
                else if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
                else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
               
        }
    }

    function question10option3(){
        if(document.querySelector(".q10option3").checked){
            if(document.querySelector(".q10option3").value == Question[9].answer){
                if(counter == 9){
                    counter=10;
                    console.log(counter);
                }
                else if(counter == 8){
                    counter=9;
                    console.log(counter);
                }
                else if(counter == 7){
                    counter=8;
                    console.log(counter);
                }
                else if(counter == 6){
                    counter=7;
                    console.log(counter);
                }
                else if(counter == 5){
                    counter=6;
                    console.log(counter);
                }
                else if(counter == 4){
                    counter=5;
                    console.log(counter);
                }
                else if(counter == 3){
                    counter=4;
                    console.log(counter);
                }
                else if(counter == 2){
                    counter=3;
                    console.log(counter);
                }
                else if(counter == 1){
                    counter=2;
                    console.log(counter);
                }
                else{
                    counter=0;
                    console.log(counter)
                }
            }
                else{
                    console.log(counter);

                }
                
        }
    }

    function result(){
       alert("Result: "+counter);
    }

   
    