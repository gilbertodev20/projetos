const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.spans-required');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/




form.addEventListener('submit',(event) =>{
    event.preventDefault();
    nameValidate() 
    emailValidate()
    mascaraTelefone()
})

function setError(index) {
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display = 'block'
}
  function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none'
  }



function nameValidate() 
{
    if(campos[0].value.length < 8)
    {
        setError(0)
    }
    else
    {
       removeError(0)
    }

}
function emailValidate()
{
    if(!emailRegex.test(campos[1].value))
    {
        setError(1)
    }
    else 
    { 
        removeError(1)
    }
} 
let celular = document.getElementById("celular");

 celular.addEventListener("input",() =>{

   let limparValor = celular.value.replace(/\D/g, "").substring(0,11);

  let numerosArray = limparValor.split("")

  let numeroFormatado = "";

  if(numerosArray.length > 0){
    numeroFormatado += `(${numerosArray.slice(0,2).join("")})`
  }
  if(numerosArray.length > 2){
    numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`
}
   
    if(numerosArray.length > 7){
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`
    }
   celular.value = numeroFormatado;
 });