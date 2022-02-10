function solve() {
    let onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', onScreen);

    function onScreen(event) {

        let [name, hall, price] = Array.from(document.querySelectorAll("#container input"));
        let nameInput = name.value.toString().length > 0 ? name.value : undefined;
        let hallInput = hall.value.toString().length > 0 ? hall.value : undefined;
        let priceInput = typeof (Number(price.value)) === 'number' ? Number(price.value) : undefined;

        if (nameInput && hallInput && priceInput && priceInput > 0) {
            let li = document.createElement('li');

            //film name
            let span = document.createElement('span');
            span.textContent = nameInput;

            //hall name
            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hallInput}`;

            let div = document.createElement('div');

            //price
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = priceInput.toFixed(2);

            //ticketSold
            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Ticket sold');

            //archiveButton
            let archiveButton = document.createElement('button')
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', Archive);

            div.appendChild(priceStrong);
            div.appendChild(ticketsSoldInput);
            div.appendChild(archiveButton);

            li.appendChild(span);
            li.appendChild(hallStrong);
            li.appendChild(div);

            let ul = document.querySelector('#movies ul');
            ul.appendChild(li);

            document.querySelectorAll('#container input')[0].value = '';	
            document.querySelectorAll('#container input')[1].value = '';	
            document.querySelectorAll('#container input')[2].value = '';
        }

        function Archive(event) {
            let movieDiv = event.target.parentElement;

            //ticket count
            let ticketsCountInput = movieDiv.querySelector('input');
            let ticketsCount = ticketsCountInput.value;

            //ticket price
            let ticketPriceInput = movieDiv.querySelector('strong')
            let ticketPrice = Number(ticketPriceInput.textContent);

            //trim because ticketCount.value is string and there are maybe white spaces
            if (ticketsCount.trim() !== '' && Number(ticketsCount) >= 0) {

                let ul = document.querySelector('#archive ul')
                let totalProfit = 0;

                //because if is equal to 0=> total profit will be 0 and we have to remove it from movie on screen, but this should not happen
                if (ticketsCount > 0) {
                    totalProfit = Number(ticketsCount) * ticketPrice;
                }

                let li = document.createElement('li');

                let span = document.createElement('span');
                span.textContent = event.target.parentElement.parentElement.firstChild.textContent;

                let strong = document.createElement('strong');
                strong.textContent = `Total amount: ${totalProfit.toFixed(2)}`;

                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', DeleteMovie);

                li.appendChild(span);
                li.appendChild(strong);
                li.appendChild(deleteButton);

                ul.appendChild(li);

                //remove film from movie on screen section
                let movieLi = movieDiv.parentElement;
                movieLi.remove();
            }
        }

        function DeleteMovie(event) {
            //remove current film from archive
            let movieToDelete = event.target.parentElement;
            movieToDelete.remove();
        }

        let clearButton = document.querySelector('#archive button');
        clearButton.addEventListener('click', Clear);

        function Clear() {
            //clear all movies in archive
            let moviesToDelete = document.querySelectorAll('#archive ul li')
            for (const movie of moviesToDelete) {
                movie.remove();
            }
        }
    }
}