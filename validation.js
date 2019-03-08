//validation scrpt here
const inputs = document.querySelectorAll('input');
console.log(inputs);
const patterns={
    telephone:/^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};




//validation function 
function validate (field, regex){
 if(regex.test(field.value)){
     field.className ='valid';
     console.log(field.className);
 }
 else{
     field.className ='invalid';
     //console.log(field.className);
 }
    //console.log(regex.test(field.value));
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
    console.log(e.target.attributes.name.value);
    validate(e.target,patterns[e.target.attributes.name.value]);
    });
});
