//validation scrpt here
const inputs = document.querySelectorAll('input');
console.log(inputs);
const patterns={
    telephone:/^\d{11}$/
};

//validation function 

inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
    console.log(e.target.attributes.name.value);
    });
});
