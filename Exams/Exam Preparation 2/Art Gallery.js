class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error('This article model is not included in this gallery!');
        }

        let articleExist = false;

        for (let i = 0; i < this.listOfArticles.length; i++) {
            if (this.listOfArticles[i].articleModel == articleModel.toLowerCase()
                && this.listOfArticles[i].articleName == articleName) {
                this.listOfArticles[i].quantity += quantity;
                articleExist = true;
            }
        }
        if (!articleExist) {
            articleModel = articleModel.toLowerCase();
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        let guestExist = false;

        for (let i = 0; i < this.guests.length; i++) {
            if (this.guests[i].guestName == guestName) {
                guestExist = true;
                throw new Error(`${guestName} has already been invited.`);
            }
        }

        if (!guestExist) {
            if (personality == 'Vip') {
                this.guests.push({ guestName, points: 500, purchaseArticle: 0 });
            }
            else if (personality == 'Middle') {
                this.guests.push({ guestName, points: 250, purchaseArticle: 0 });
            }
            else {
                this.guests.push({ guestName, points: 50, purchaseArticle: 0 });
            }

            return `You have successfully invited ${guestName}!`;
        }
    }
    buyArticle(articleModel, articleName, guestName) {
        let articleToCheck=this.listOfArticles.find(x => x.articleName == articleName);
        if (!(articleToCheck
            && articleToCheck.articleModel==articleModel)){
                throw new Error('This article is not found.');
            }
        if(this.listOfArticles.find(x=>x.articleName==articleName).quantity==0){
            return `The ${articleName} is not available.`;
        }
        if(!this.guests.some(x=>x.guestName==guestName)){
            return 'This guest is not invited.';
        }

        let currentModel=this.possibleArticles[articleModel];
        let currentGuest=this.guests.find(x=>x.guestName==guestName);
        let currentArticle=this.listOfArticles.find(x=>x.articleName==articleName);

        if(currentGuest.points<currentModel){
            return 'You need to more points to purchase the article.';
        }
        else{
            currentGuest.points-=currentModel;
            currentArticle.quantity--;
            currentGuest.purchaseArticle++;

            return `${currentGuest.guestName} successfully purchased the article worth ${currentModel} points.`;
        }
    }
    showGalleryInfo (criteria){
        let result='';

        if(criteria=='article'){
            result+= 'Articles information:\n';
            this.listOfArticles.forEach(a=>{
                result+=`${a.articleModel} - ${a.articleName} - ${a.quantity}\n`;
            })
            result.trimEnd();
        }
        else if(criteria=='guest'){
            result+= 'Guests information:\n';
            this.guests.forEach(g=>{
                result+=`${g.guestName} - ${g.purchaseArticle}\n`;
            })
            result.trimEnd();
        }

        return result.trimEnd();
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle')); 
//console.log(artGallery.inviteGuest('John', 'Middle'));



const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));


// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));
