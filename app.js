
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
  setTimeout(function(){ document.getElementById('loading').style.display = 'none';},2000)
  // document.getElementById('loading').style.display = 'none';
    //setTimeout(calResults,1000);
setTimeout(calResults,2000);
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
         errText.innerHTML ="";
         errText.appendChild(document.createTextNode('**please Check your loan amount ')) ;
     }

     if(isFinite(parseFloat(amount.value))) {
        document.querySelector('.amount-check').innerHTML="";
 }
      if(interest.value==''){
        
        const errText = document.querySelector('.interest-check');
        errText.innerHTML ="";
        errText.appendChild(document.createTextNode('**please Check your interest value')) ; 
    }
    if(isFinite(parseFloat(interest.value))) {
        document.querySelector('.interest-check').innerHTML="";
       
}
    
     if(years.value==''){
        
        const errText = document.querySelector('.years-check');
        errText.innerHTML ="";
        errText.appendChild(document.createTextNode('**please Check your time-period value')) ;
    }
    if(isFinite(parseFloat(years.value))) {
        document.querySelector('.years-check').innerHTML="";
   
}

      
  if(isFinite(monthlyAmount)) {
        monthlyPayment.value = monthlyAmount.toFixed(2);
        totalPayment.value = (monthlyAmount*nofMonths).toFixed(2);
        totalInterest.value = ((totalPayment.value)-principalAmount).toFixed(2);
     //show result
     document.getElementById('results').style.display = 'block';
     //hide loader
     document.getElementById('loading').style.display = 'none';
    

       

     // remove amounterr
    
     
        
        
        //
        
            
        // 
       
    }    

}
     
