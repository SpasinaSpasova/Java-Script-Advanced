function solve() {

    //inputs
    let taskInputElement = document.getElementById('task');
    let descriptionTextAreaElement = document.getElementById('description');
    let dateInputElement = document.getElementById('date');

    //buttons

    let addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click', clickAdd);

    //sections
    let allSections = Array.from(document.querySelectorAll('section'));

    function clickAdd(event) {
        event.preventDefault();

        let taskValue = taskInputElement.value;
        let descriptionValue = descriptionTextAreaElement.value;
        let dateValue = dateInputElement.value;

        if (taskValue != '' && descriptionValue != '' && dateValue != '') {
            let divInSectionOne = allSections[1].querySelectorAll('div')[1];
            let articleElement = document.createElement('article');

            let h3Element = document.createElement('h3');
            h3Element.textContent = taskValue;

            let p1Element = document.createElement('p');
            p1Element.textContent = `Description: ${descriptionValue}`;

            let p2Element = document.createElement('p');
            p2Element.textContent = `Due Date: ${dateValue}`;

            let nestedDivWithClass = document.createElement('div');
            nestedDivWithClass.classList.add('flex');

            let startButtonElement = document.createElement('button');
            startButtonElement.classList.add('green');
            startButtonElement.textContent = 'Start';

            let endButtonElement = document.createElement('button');
            endButtonElement.classList.add('red');
            endButtonElement.textContent = 'Delete';

            nestedDivWithClass.appendChild(startButtonElement);
            nestedDivWithClass.appendChild(endButtonElement);

            articleElement.appendChild(h3Element);
            articleElement.appendChild(p1Element);
            articleElement.appendChild(p2Element);
            articleElement.appendChild(nestedDivWithClass);

            divInSectionOne.appendChild(articleElement);



            //-----------------------------------------------------------
            startButtonElement.addEventListener('click', (event1) => {
                let divInSectionTwo = allSections[2].querySelectorAll('div')[1];
                let articleElement = document.createElement('article');

                let h3ElementStart = document.createElement('h3');
                h3ElementStart.textContent = taskValue;

                let p1ElementStart = document.createElement('p');
                p1ElementStart.textContent = `Description: ${descriptionValue}`;

                let p2ElementStart = document.createElement('p');
                p2ElementStart.textContent = `Due Date: ${dateValue}`;

                let nestedDivWithClass = document.createElement('div');
                nestedDivWithClass.classList.add('flex');

                let endButtonElement = document.createElement('button');
                endButtonElement.classList.add('red');
                endButtonElement.textContent = 'Delete';

                let finishButtonElement = document.createElement('button');
                finishButtonElement.classList.add('orange');
                finishButtonElement.textContent = 'Finish';


                nestedDivWithClass.appendChild(finishButtonElement);
                nestedDivWithClass.appendChild(endButtonElement);

                articleElement.appendChild(h3ElementStart);
                articleElement.appendChild(p1ElementStart);
                articleElement.appendChild(p2ElementStart);
                articleElement.appendChild(nestedDivWithClass);

                divInSectionTwo.appendChild(articleElement);
                event1.target.parentNode.parentNode.remove();

                endButtonElement.addEventListener('click',(eventd)=>{
                    eventd.target.parentNode.parentNode.remove();
                });

                finishButtonElement.addEventListener('click',(ev)=>{
                    let divInSectionThree = allSections[3].querySelectorAll('div')[1];
                    let articleElement = document.createElement('article');
    
                    let h3ElementFinish = document.createElement('h3');
                    h3ElementFinish.textContent = taskValue;
    
                    let p1ElementFinish= document.createElement('p');
                    p1ElementFinish.textContent = `Description: ${descriptionValue}`;
    
                    let p2ElementFinish = document.createElement('p');
                    p2ElementFinish.textContent = `Due Date: ${dateValue}`;

                    articleElement.appendChild(h3ElementFinish);
                    articleElement.appendChild(p1ElementFinish);
                    articleElement.appendChild(p2ElementFinish);
    
                    divInSectionThree.appendChild(articleElement);

                    ev.target.parentNode.parentNode.remove();
    
                })
     

            });

            endButtonElement.addEventListener('click',(event2)=>{
                event2.target.parentNode.parentNode.remove();

            });

            
            taskInputElement.value = '';
            dateInputElement.value = '';
            descriptionTextAreaElement.value = '';
        }
    }
}