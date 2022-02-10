function calculator() {
    let inp1 ;
    let inp2 ;
    let result ;

    let obj = {
        init: function (selector1, selector2, resultSelector) {
            inp1 = document.querySelector(selector1);
            inp2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: function () {
            result.value = Number(inp1.value) + Number(inp2.value);
        },
        subtract: function () {
            result.value = Number(inp1.value) - Number(inp2.value);
        }
    }
    return obj;
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 





