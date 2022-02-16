window.addEventListener('load', solution);

function solution() {
  //input fields
  const fnameElement = document.getElementById('fname');
  const emailElement = document.getElementById('email');
  const phoneElement = document.getElementById('phone');
  const addressElement = document.getElementById('address');
  const codeElement = document.getElementById('code');

  //all buttons;
  const submitBTNElement = document.getElementById('submitBTN');
  const editBTNElement = document.getElementById('editBTN');
  const continueBTNElement = document.getElementById('continueBTN');

  //ul
  const ulInfoPreviewElement = document.getElementById('infoPreview');

  //main div
  const divBlockElement = document.getElementById('block');

  submitBTNElement.addEventListener('click', (event) => {
    if (fnameElement.value!=='' && emailElement.value!=='') {

      event.target.disabled = true;
      editBTNElement.disabled = false;
      continueBTNElement.disabled = false;

      let fnameLiElement = document.createElement('li');
      fnameLiElement.textContent = `Full Name: ${fnameElement.value}`;

      let emailLiElement = document.createElement('li');
      emailLiElement.textContent = `Email: ${emailElement.value}`;

      let phoneLiElement = document.createElement('li');
      phoneLiElement.textContent = `Phone Number: ${phoneElement.value}`;

      let addressLiElement = document.createElement('li');
      addressLiElement.textContent = `Address: ${addressElement.value}`;

      let codeLiElement = document.createElement('li');
      codeLiElement.textContent = `Postal Code: ${codeElement.value}`;

      ulInfoPreviewElement.appendChild(fnameLiElement);
      ulInfoPreviewElement.appendChild(emailLiElement);
      ulInfoPreviewElement.appendChild(phoneLiElement);
      ulInfoPreviewElement.appendChild(addressLiElement);
      ulInfoPreviewElement.appendChild(codeLiElement);


      fnameElement.value = '';
      emailElement.value = '';
      phoneElement.value = '';
      addressElement.value = '';
      codeElement.value = '';

    }
  });

  editBTNElement.addEventListener('click', (event) => {
    let allLiElements = Array.from(document.querySelectorAll('li'));

    fnameElement.value = allLiElements[0].textContent.split(': ')[1];
    emailElement.value = allLiElements[1].textContent.split(': ')[1];
    phoneElement.value = allLiElements[2].textContent.split(': ')[1];
    addressElement.value = allLiElements[3].textContent.split(': ')[1];
    codeElement.value = allLiElements[4].textContent.split(': ')[1];

    event.target.disabled = true;
    submitBTNElement.disabled = false;
    continueBTNElement.disabled = true;

    ulInfoPreviewElement.innerHTML = '';
  });

  continueBTNElement.addEventListener('click', () => {
    divBlockElement.innerHTML = '';

    let h3Element=document.createElement('h3');
    h3Element.textContent='Thank you for your reservation!';
    divBlockElement.appendChild(h3Element);

  });

}
