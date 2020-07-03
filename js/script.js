'use strict';

calc.addEventListener('click', calculateBmi);

function calculateBmi() {
    const weight = document.bmiForm.weight.value;
    const height = document.bmiForm.height.value;

    if (weight > 0 && height > 0) {
        const finalBmi = (weight / Math.pow(height, 2) * 10000).toFixed(2)

        document.bmiForm.bmi.value = finalBmi

        if (finalBmi < 16) {
            document.bmiForm.meaning.value = "Wygłodzenie";
        }
        if (finalBmi > 16 && finalBmi <= 16.99) {
            document.bmiForm.meaning.value = "Wychudzenie";
        }
        if (finalBmi > 16.99 && finalBmi <= 18.49) {
            document.bmiForm.meaning.value = "Niedowaga";
        }
        if (finalBmi > 18.49 && finalBmi <= 24.99) {
            document.bmiForm.meaning.value = "Wartość prawidłowa";
        }
        if (finalBmi > 24.99 && finalBmi <= 29.99) {
            document.bmiForm.meaning.value = "Nadwaga";
        }
        if (finalBmi > 29.99 && finalBmi <= 34.99) {
            document.bmiForm.meaning.value = "I stopień otyłości";
        }
        if (finalBmi > 34.99 && finalBmi <= 39.99) {
            document.bmiForm.meaning.value = "II stopień otyłości";
        }
        if (finalBmi > 40) {
            document.bmiForm.meaning.value = "Otyłość skrajna";
        }
    } else {
        alert("Proszę wypełnić wszystkie pola")

    }
}