const formEl = document.querySelector('form');
const errMsgEl = document.getElementsByClassName('errMsg')
const errLabelEl = document.getElementsByClassName('errLabel')
const invalidEl = document.getElementsByClassName('invalid')
formEl.addEventListener("submit",(e)=>{
    e.preventDefault();

    const formData = new FormData(formEl);
    const inputArr = Object.fromEntries(formData);
    console.log(inputArr);
    
   for (let i = 0; i < 3; i++) {
    if(formEl.elements[i].value === ''){
        errMsgEl[i].classList.remove('hidden');
        errLabelEl[i].classList.add('!text-red-500')
        console.log(errLabelEl[i]);
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
})