
const formSubmit = document.getElementById('loan-form');
    
const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years= document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest')

//eventListners

formSubmit.addEventListener('submit',function(e) {
    //hide result
    document.getElementById('results').style.display = 'none';
    //show loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calResults,1000);

    e.preventDefault();
})

//Loan Clac Results

function calResults(){
    
    


    const principalAmount = parseFloat(amount.value)
    const rateofInterest = parseFloat((interest.value)/(100*12));
    const nofMonths = parseFloat(years.value)*12;
    //monthly payments
    const rate = Math.pow(1+rateofInterest,nofMonths)
    const monthlyAmount = (principalAmount*rateofInterest*rate)/(rate-1);
   
     if(amount.value==''){
        
         const errText = document.querySelector('.amount-check');
         errText.appendChild(document.createTextNode('**please Check your ammountinput')) ;
     }
     if(amount.value==''){
        
        const errText = document.querySelector('.interest-check');
        errText.appendChild(document.createTextNode('**please Check your interest value')) ;
    }
    if(amount.value==''){
        
        const errText = document.querySelector('.years-check');
        errText.appendChild(document.createTextNode('**please Check your time-period value')) ;
    }
      
    else {
        monthlyPayment.value = monthlyAmount.toFixed(2);
        totalPayment.value = (monthlyAmount*nofMonths).toFixed(2);
        totalInterest.value = ((totalPayment.value)-principalAmount).toFixed(2);
     //show result
     document.getElementById('results').style.display = 'block';
     //hide loader
     document.getElementById('loading').style.display = 'none';
    
    }
       

     // remove amounterr
       setTimeout(
        function(){
            document.querySelector('.amount-check').remove();
        }   
        
        ,2000)
        //
        setTimeout(
            function(){
                document.querySelector('.interest-check').remove();
            }   
            
            ,2000)
        // 
         setTimeout(
            function(){
                document.querySelector('.years-check').remove();
            }   
            
            ,2000)
    

     }

    
     
