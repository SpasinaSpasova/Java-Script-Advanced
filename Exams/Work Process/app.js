function solve() {
    let fnameInputElement = document.getElementById('fname');
    let lnameInputElement = document.getElementById('lname');
    let emailInputElement = document.getElementById('email');
    let birthInputElement = document.getElementById('birth');
    let positionInputElement = document.getElementById('position');
    let salaryInputElement = document.getElementById('salary');
    let sumSalaray = document.getElementById('sum');
    let sum = 0;

    let addWorkerButton = document.getElementById('add-worker');
    addWorkerButton.addEventListener('click', (event) => {
        event.preventDefault();

        let fname = fnameInputElement.value;
        let lname = lnameInputElement.value;
        let email = emailInputElement.value;
        let birth = birthInputElement.value;
        let position = positionInputElement.value;
        let salary = salaryInputElement.value;

        if (fname != '' && lname != '' && email != '' && birth != '' && position != '' && salary != '') {
            let firstTable = document.querySelector('.tbl-header table');
            let tableBodyElement = document.createElement('tbody');
            tableBodyElement.id = 'tbody';

            let tableRow = document.createElement('tr');

            let td1 = document.createElement('td');
            td1.textContent = fname;

            let td2 = document.createElement('td');
            td2.textContent = lname;

            let td3 = document.createElement('td');
            td3.textContent = email;

            let td4 = document.createElement('td');
            td4.textContent = birth;

            let td5 = document.createElement('td');
            td5.textContent = position;

            let td6 = document.createElement('td');
            td6.textContent = salary;

            tableRow.appendChild(td1);
            tableRow.appendChild(td2);
            tableRow.appendChild(td3);
            tableRow.appendChild(td4);
            tableRow.appendChild(td5);
            tableRow.appendChild(td6);

            let largeTD = document.createElement('td');

            let btnFired = document.createElement('button');
            btnFired.textContent = 'Fired';
            btnFired.classList.add('fired');

            let btnEdit = document.createElement('button');
            btnEdit.textContent = 'Edit';
            btnEdit.classList.add('edit');

            largeTD.appendChild(btnFired);
            largeTD.appendChild(btnEdit);

            tableRow.appendChild(largeTD);

            tableBodyElement.appendChild(tableRow);
            firstTable.appendChild(tableBodyElement);

            fnameInputElement.value = '';
            lnameInputElement.value = '';
            emailInputElement.value = '';
            birthInputElement.value = '';
            positionInputElement.value = '';
            salaryInputElement.value = '';


            sum += Number(salary);
            sumSalaray.textContent = sum.toFixed(2);

            btnEdit.addEventListener('click', (event1) => {
                fnameInputElement.value = fname;
                lnameInputElement.value = lname;
                emailInputElement.value = email;
                birthInputElement.value = birth;
                positionInputElement.value = position;
                salaryInputElement.value = salary;

                sum -= Number(salary);
                sumSalaray.textContent = sum.toFixed(2);

                event1.target.parentNode.parentNode.remove();
            });

            btnFired.addEventListener('click', (event2) => {
                event2.target.parentNode.parentNode.remove();
                let salary = Number(event2.target.parentNode.parentNode.querySelector('td:nth-child(6)').textContent);
                sum -= Number(salary);
                sumSalaray.textContent = sum.toFixed(2);
            });

        }
    })
}
