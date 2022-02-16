window.addEventListener('load', solve);

function solve() {
    //input elements
    const genreElement = document.getElementById('genre');
    const nameElement = document.getElementById('name');
    const authorElement = document.getElementById('author');
    const dateElement = document.getElementById('date');

    //buttons
    const addButtonElement = document.getElementById('add-btn');

    //
    const allHitsContainerDiv = document.querySelector('.all-hits-container');

    addButtonElement.addEventListener('click', function (event) {
        event.preventDefault();

        const genreValue = genreElement.value;
        const nameValue = nameElement.value;
        const authorValue = authorElement.value;
        const dateValue = dateElement.value;

        if (genreValue !== '' && nameValue !== '' && authorValue !== '' && dateValue !== '') {
            let hitsInfoDivElement = document.createElement('div');
            hitsInfoDivElement.classList.add('hits-info');

            let imgElement = document.createElement('img');
            imgElement.src = './static/img/img.png';

            let h2ElementGenre = document.createElement('h2');
            h2ElementGenre.textContent = `Genre: ${genreValue}`;

            let h2ElementName = document.createElement('h2');
            h2ElementName.textContent = `Name: ${nameValue}`;

            let h2ElementAuthor = document.createElement('h2');
            h2ElementAuthor.textContent = `Author: ${authorValue}`;

            let h3ElementDate = document.createElement('h3');
            h3ElementDate.textContent = `Date: ${dateValue}`;

            let saveBtnElement = document.createElement('button');
            saveBtnElement.classList.add('save-btn');
            saveBtnElement.textContent = 'Save song';

            let likeBtnElement = document.createElement('button');
            likeBtnElement.classList.add('like-btn');
            likeBtnElement.textContent = 'Like song';

            let deleteBtnElement = document.createElement('button');
            deleteBtnElement.classList.add('delete-btn');
            deleteBtnElement.textContent = 'Delete';

            hitsInfoDivElement.appendChild(imgElement);
            hitsInfoDivElement.appendChild(h2ElementGenre);
            hitsInfoDivElement.appendChild(h2ElementName);
            hitsInfoDivElement.appendChild(h2ElementAuthor);
            hitsInfoDivElement.appendChild(h3ElementDate);
            hitsInfoDivElement.appendChild(saveBtnElement);
            hitsInfoDivElement.appendChild(likeBtnElement);
            hitsInfoDivElement.appendChild(deleteBtnElement);

            allHitsContainerDiv.appendChild(hitsInfoDivElement);

            genreElement.value = '';
            nameElement.value = '';
            authorElement.value = '';
            dateElement.value = '';

            likeBtnElement.addEventListener('click', function (event) {
                let totalLikesElement = document.querySelector('#total-likes .likes p');
                let likes = Number(totalLikesElement.textContent.split(': ')[1]);
                likes++;
                totalLikesElement.textContent = `Total Likes: ${likes}`;
                event.target.disabled = true;
            });

            saveBtnElement.addEventListener('click', function (event) {
                let savedContainerDivElement = document.querySelector('.saved-container');

                let hitsInfoDivElement = document.createElement('div');
                hitsInfoDivElement.classList.add('hits-info');

                let imgElement = document.createElement('img');
                imgElement.src = './static/img/img.png';

                let h2ElementGenre = document.createElement('h2');
                h2ElementGenre.textContent = `Genre: ${genreValue}`;

                let h2ElementName = document.createElement('h2');
                h2ElementName.textContent = `Name: ${nameValue}`;

                let h2ElementAuthor = document.createElement('h2');
                h2ElementAuthor.textContent = `Author: ${authorValue}`;

                let h3ElementDate = document.createElement('h3');
                h3ElementDate.textContent = `Date: ${dateValue}`;

                let deleteBtnElement = document.createElement('button');
                deleteBtnElement.classList.add('delete-btn');
                deleteBtnElement.textContent = 'Delete';

                hitsInfoDivElement.appendChild(imgElement);
                hitsInfoDivElement.appendChild(h2ElementGenre);
                hitsInfoDivElement.appendChild(h2ElementName);
                hitsInfoDivElement.appendChild(h2ElementAuthor);
                hitsInfoDivElement.appendChild(h3ElementDate);
                hitsInfoDivElement.appendChild(deleteBtnElement);

                savedContainerDivElement.appendChild(hitsInfoDivElement);

                //allHitsContainerDiv.innerHTML='<h1>Collection of songs</h1>';
                event.target.parentNode.remove();
                deleteBtnElement.addEventListener('click',function(event){
                    event.target.parentNode.remove();
                })

            })

            deleteBtnElement.addEventListener('click',function(event){ 
                event.target.parentNode.remove();
            })

        }

    });
}