const formEl = document.querySelector('form');
const errMsgEl = document.getElementsByClassName('errMsg')
const errLabelEl = document.getElementsByClassName('errLabel')
const invalidEl = document.getElementsByClassName('invalid')
const yearEl = document.getElementById('years')
const monthEl = document.getElementById('months')
const dayEl = document.getElementById('days')
formEl.addEventListener("submit",(e)=>{
    e.preventDefault();

    const formData = new FormData(formEl);
    const inputArr = Object.fromEntries(formData);
    console.log(inputArr);
    
   for (let i = 0; i < 3; i++) {
    if(formEl.elements[i].value === ''){
        errMsgEl[i].classList.remove('hidden');
        errLabelEl[i].classList.add('!text-red-500')
        
    }else{
        // console.log('hello');
        if(formEl.elements[0].value <= 0 || formEl.elements[0].value > 31){
            invalidEl[0].classList.remove('hidden')
        }
        if(formEl.elements[1].value <= 0 || formEl.elements[1].value > 12){
            invalidEl[1].classList.remove('hidden')
        }
    }
    
   }
   
   let dob = `${inputArr.year}-${inputArr.month}-${inputArr.day}`
   let age = calculateAge(dob)
   yearEl.innerText = age.years
   monthEl.innerText = age.months
   dayEl.innerText = age.days

 })


function calculateAge(dob) {
    // Parse the date of birth string into a Date object
    var dobDate = new Date(dob);
    
    // Get the current date
    var currentDate = new Date();
    
    // Calculate the difference in milliseconds between the two dates
    var timeDifference = currentDate - dobDate;
    
    // Calculate the number of milliseconds in a day, month, and year
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var millisecondsPerMonth = 30.44 * millisecondsPerDay; // Assuming an average month length
    var millisecondsPerYear = 365.25 * millisecondsPerDay; // Assuming a year has 365.25 days
    
    // Calculate the age in years, months, and days
    var years = Math.floor(timeDifference / millisecondsPerYear);
    var months = Math.floor((timeDifference % millisecondsPerYear) / millisecondsPerMonth);
    var days = Math.floor(((timeDifference % millisecondsPerYear) % millisecondsPerMonth) / millisecondsPerDay);
    
    // Return the result
    return {
      years: years,
      months: months,
      days: days
    };
  }
  
  // Example usage:

//   var age = calculateAge(dob);