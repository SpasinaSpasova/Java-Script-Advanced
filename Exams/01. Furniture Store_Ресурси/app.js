window.addEventListener('load', solve);

function solve() {
    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');

    let buttonAddElement = document.getElementById('add');
    buttonAddElement.addEventListener('click', clickButtonAdd);

    function clickButtonAdd(event) {

        event.preventDefault();

        let model = modelInputElement.value;
        let year = Number(yearInputElement.value);
        let description = descriptionInputElement.value;
        let price = Number(priceInputElement.value);

        if (model == '' || description == '') {
            return;
        }
        if (year <= 0 || price < 0) {
            return;
        }

        let tableBody = document.getElementById('furniture-list');

        let tableRowElement = document.createElement('tr');
        tableRowElement.classList.add('info');

        let modelTableData = document.createElement('td');
        modelTableData.textContent = model;

        let priceTableData = document.createElement('td');
        priceTableData.textContent = price.toFixed(2);

        let buttonsTableData = document.createElement('td');
        let moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'More Info';
        moreInfoButton.classList.add('moreBtn');
        let buyItButton = document.createElement('button');
        buyItButton.textContent = 'Buy it';
        buyItButton.classList.add('buyBtn');

        buttonsTableData.appendChild(moreInfoButton);
        buttonsTableData.appendChild(buyItButton);

        tableRowElement.appendChild(modelTableData);
        tableRowElement.appendChild(priceTableData);
        tableRowElement.appendChild(buttonsTableData);

        let tableRowForHiddenInfo = document.createElement('tr');
        tableRowForHiddenInfo.classList.add('hide');

        let yearTableData = document.createElement('td');
        yearTableData.textContent = `Year: ${year}`;

        let descriptionTableData = document.createElement('td');
        descriptionTableData.textContent = `Description: ${description}`;
        descriptionTableData.setAttribute('colspan', 3);

        tableRowForHiddenInfo.appendChild(yearTableData);
        tableRowForHiddenInfo.appendChild(descriptionTableData);
        tableRowForHiddenInfo.style.display = 'none';

        tableBody.appendChild(tableRowElement);
        tableBody.appendChild(tableRowForHiddenInfo);


        moreInfoButton.addEventListener('click', function () {
            if (moreInfoButton.textContent == 'More Info') {
                moreInfoButton.textContent = 'Less Info';
                tableRowForHiddenInfo.style.display = 'contents';
            }
            else if (moreInfoButton.textContent == 'Less Info') {
                moreInfoButton.textContent = 'More Info';
                tableRowForHiddenInfo.style.display = 'none';

            }
        });


        buyItButton.addEventListener('click', function (event) {
            let totalAmountElement = document.querySelector('.total-price');

            let totalAmount = Number(totalAmountElement.textContent);

            tableRowForHiddenInfo.remove();
            tableRowElement.remove();

            totalAmount += price;
            totalAmountElement.textContent = totalAmount.toFixed(2);
        });

    }
    modelInputElement.value='';
    yearInputElement.value='';
    descriptionInputElement.value='';
    priceInputElement.value='';
}
