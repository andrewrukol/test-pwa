const inputs = document.getElementsByClassName("calculator-input")

for (let input of inputs) {
    input.addEventListener("input", (event) => {
        // console.log(event);
        setValue(event.target.id, event.target.value);
    });
}

const calculatorData = {
    ves: null,
    uglevodoNaSto: null,
    uglevodovNaEdinicu: 12,
    zhelaemihEdinic: null,
};

const calculatorInputs = {
    ves: "input-ves",
    uglevodoNaSto: "input-uglevodoNaSto",
    zhelaemihEdinic: "input-zhelaemihEdinic",
}

function setValue(inputId, value) {
    switch(inputId) {
        case "input-ves":

            break;
        case "input-uglevodoNaSto":

            break;
        case "input-uglevodovNaEdinicu":

            break;
        case "input-zhelaemihEdinic":

            break;
        default:
            break;
    };
}

function readValues() {
    calculatorData.ves = document.getElementById(calculatorInputs.ves).value;
    calculatorData.uglevodoNaSto = document.getElementById(calculatorInputs.uglevodoNaSto).value;
    calculatorData.zhelaemihEdinic = document.getElementById(calculatorInputs.zhelaemihEdinic).value;
}

function roundResult(value) {
    return Math.round(value * 100) / 100;
}

function calculateValues() {
    if (calculatorData.ves && calculatorData.uglevodoNaSto) {
        const uglevodov = (calculatorData.ves / 100) * calculatorData.uglevodoNaSto;
        const edinic = uglevodov / calculatorData.uglevodovNaEdinicu;
        document.getElementById(calculatorInputs.zhelaemihEdinic).value = roundResult(edinic);
    } else if (calculatorData.uglevodoNaSto && calculatorData.zhelaemihEdinic) {
        const uglevodov = calculatorData.zhelaemihEdinic * calculatorData.uglevodovNaEdinicu;
        const ves = (uglevodov / calculatorData.uglevodoNaSto) * 100;
        document.getElementById(calculatorInputs.ves).value = roundResult(ves);
    }
}

document.getElementById("calculator-submit").addEventListener("click", () => {
    readValues();
    calculateValues();
});
