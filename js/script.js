//(3c * 9/5)+32=37.4f
let $ = document;
let convertBtn = $.querySelector(".convertButton");
let resetBtn = $.querySelector(".resetButton");
let changeBtn = $.querySelector(".changeButton");




let firstValue = $.querySelector(".C");
let secondValue = $.querySelector(".F");
let converter = $.querySelector("#converter");
let result = $.querySelector(".result");




function convertFunc() {
    if (converter.value === "") {
        result.innerHTML = "مقدار خالی را وارد ننمایید";
        result.style.color = "#930";
    } else if (isNaN(converter.value)) {
        result.innerHTML = "مقدار نامعتبر وارد شده است";
        result.style.color = "#930";
    } else {
        if (firstValue.innerHTML === "°C") {
            let resultValue = (converter.value * 9 / 5) + 32;
            result.innerHTML = converter.value + "°C To" + resultValue + "°F";
            result.style.color = "green";
        } else {
            let resultValue = ((converter.value - 32) * 5 / 9).toFixed(2);
            result.innerHTML = converter.value + "°F To" + resultValue + "°C";
            result.style.color = "green";
        }
    }

}
function changeFunc() {

    if (firstValue.innerHTML === "°C") {
        firstValue.innerHTML = "°F";
        secondValue.innerHTML = "°C";
        converter.setAttribute("placeholder", "°F");
        $.title = "Alireza tTalebizadeh | °F to °C";
    } else {
        firstValue.innerHTML = "°C";
        secondValue.innerHTML = "°F"
        converter.setAttribute("placeholder", "°C");
        $.title = "Alireza tTalebizadeh | °C to °F";
    }

}

function resetFunc() {
    result.innerHTML = "";
    converter.value = "";
}


convertBtn.addEventListener("click", convertFunc);
resetBtn.addEventListener("click", resetFunc);
changeBtn.addEventListener("click", changeFunc);


