function solve(array) {

    let cars = {};

    array.forEach(c => {
        let [carBrand, carModel, producedCars] = c.split(' | ');

        if (!cars.hasOwnProperty(carBrand)) {
            cars[carBrand] = [];
        }
        if (!cars[carBrand].find(c => c[carModel])) {
            cars[carBrand].push({[carModel]: Number(producedCars)});
        }
        else {
            cars[carBrand].find(c => c[carModel])[carModel] += Number(producedCars);

        }
    });
    let result = '';

    for (const [brand, carData] of Object.entries(cars)) {

        result += `${brand}\n`;

        for (const item of carData) {

            let model = Object.keys(item);
            let quantity = item[model];

            result += `###${model} -> ${quantity}\n`;
        }
    }
    
    return result.trimEnd();
}
console.log(solve([
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mini | Countryman | 100',
    'Mini | Clubman | 1000',
]));
