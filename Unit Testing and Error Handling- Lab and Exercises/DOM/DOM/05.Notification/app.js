function notify(message) {
  let divElement=document.getElementById('notification');
  divElement.textContent=message;
  divElement.style.display='block';


  divElement.addEventListener('click',clickDiv)
  function clickDiv(event){
    divElement.style.display='none';
  }
}