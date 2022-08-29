const inputElements = document.querySelectorAll('input');
let inputArray = Array.from(inputElements)

const priceAdds = document.querySelector('.card-text');
const buttons = document.querySelectorAll('button');
const submit = document.querySelector('.order-info');

let price = 0;
let priceAll = 0;

buttons[0].addEventListener('click', function () {
    inputArray.forEach(function (element){
        element.checked = true;
        priceAdds.innerText = `Kwota za dodatki: ${priceAll=18.30}`;
    })
})

buttons[1].addEventListener('click', function () {
    inputArray.forEach(function (element){
        element.checked = false;
        priceAdds.innerText = `Kwota za dodatki: ${priceAll=0}`;
    })
})

buttons[2].addEventListener('click',function (even){
    even.preventDefault()
    submit.innerText = `Kwota do zapłaty :${parseFloat(priceAll+35).toFixed(2)}`
})

inputArray.forEach(function (element){
    element.addEventListener("click", function (){
        price = Number(element.dataset.price);
        if (element.checked){
            priceAll += price;
            priceAdds.innerText = `Kwota za dodatki: ${parseFloat(priceAll).toFixed(2)}`;
        } else {
            priceAll -= price;
            priceAdds.innerText = `Kwota za dodatki: ${parseFloat(priceAll).toFixed(2)}`;
        }
        })
    })