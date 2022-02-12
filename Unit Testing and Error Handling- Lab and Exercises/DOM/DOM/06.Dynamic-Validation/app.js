function validate() {

    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', onChange);

    let regex = /[a-z]+@[a-z]+\.[a-z]+/;

    function onChange(event) {

        if (!regex.test(event.target.value)) {
            event.target.classList.add('error');
        }
        else {
            event.target.classList.remove('error');
        }
    }
}