  
 console.log(inchis.value)
  
document.getElementById('btn').addEventListener('click',function(){
    // get inchis from UI 
    const inchis=document.getElementById('inchis');
    const getInchis=inchis.value;
    // Convert String To number 
     const getInchisValue=parseInt(getInchis);
    //  Get Feet Calculation
     const getFeet=getInchisValue/12
   const feetValue=  getFeet.toFixed(2)
 
    //  get Feet Input Field 
const feets=document.getElementById('feets');
feets.innerText=feetValue;
 
 
 
})


// 1.Feet To meter 
// Miles to Kilomerer 

// F to C 

// kj to gram 
// gram to kj






