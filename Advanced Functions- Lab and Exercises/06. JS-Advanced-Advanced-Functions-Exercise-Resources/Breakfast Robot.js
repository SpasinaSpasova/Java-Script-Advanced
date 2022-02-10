function solution() {
    let carbohydrate = 0;
    let flavour = 0;
    let fat = 0;
    let protein = 0;
    return function (input) {

        if (input.includes('restock')) {
            let [restock, microelement, quantity] = input.split(' ');
            if (microelement == 'carbohydrate') {
                carbohydrate += Number(quantity);
            }
            else if (microelement == 'flavour') {
                flavour += Number(quantity);
            }
            else if (microelement == 'fat') {
                fat += Number(quantity);
            }
            else if (microelement == 'protein') {
                protein += Number(quantity);
            }
            return 'Success';
        }
        else if (input == 'report') {
            return `protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`;
        }
        else if (input.includes('prepare')) {
            let [prepare, recipe, quantity] = input.split(' ');
            if (recipe == 'apple') {
                if (carbohydrate > Number(quantity) && flavour > Number(quantity)*2) {
                    carbohydrate -= Number(quantity);
                    flavour -= Number(quantity)*2;
                    return 'Success';
                }
                else {
                    return `Error: not enough carbohydrate in stock`;
                }
            }
            else if (recipe == 'lemonade') {
                if (carbohydrate > Number(quantity)*10 && flavour > Number(quantity)*20) {
                    carbohydrate -= Number(quantity)*10;
                    flavour -= Number(quantity)*20;
                    return 'Success';
                }
                else {
                    return `Error: not enough carbohydrate in stock`;
                }
            }
            else if (recipe == 'burger') {
                //•	burger - made with 5 carbohydrate, 7 fat and 3 flavour
                if (carbohydrate > Number(quantity)*5 && flavour > Number(quantity)*3 && fat > Number(quantity)*7) {
                    carbohydrate -= Number(quantity)*5;
                    fat -= Number(quantity)*7;
                    flavour -= Number(quantity)*3;
                    return 'Success';
                }
                else {
                    return `Error: not enough carbohydrate in stock`;
                }
            }
            else if (recipe == 'eggs') {
                //•	eggs - made with 5 protein, 1 fat and 1 flavour
                if (protein > Number(quantity)*5 && fat > Number(quantity) && flavour > Number(quantity)) {
                    protein -= Number(quantity)*5;
                    fat -= Number(quantity);
                    flavour -= Number(quantity);
                    return 'Success';
                }
                else {
                    return `Error: not enough protein in stock`;
                }
            }
            else if (recipe == 'turkey') {
                //•	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
                if (protein > Number(quantity)*10 && carbohydrate > Number(quantity)*10 && fat > Number(quantity)*10 && flavour > Number(quantity)*10) {
                    carbohydrate -= Number(quantity)*10;
                    protein -= Number(quantity)*10;
                    fat -= Number(quantity)*10;
                    flavour -= Number(quantity)*10;
                    return 'Success';
                }
                else {
                    return `Error: not enough protein in stock`;
                }
            }
        }
    }

}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

