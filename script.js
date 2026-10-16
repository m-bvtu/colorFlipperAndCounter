// Counter
const btns = document.querySelectorAll(".btn");
const number = document.getElementById("number");

let count = 0;
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('reset')) {
            count = 0;
        } else if (styles.contains('increase')) {
            count++;
        }

        // change the color of the number
        if (count < 0){
            number.style.color = "red";
        } else if (count > 0) {
            number.style.color = "green";
        } else {
            number.style.color = "black";
        }
        
        number.textContent = count;
    });
});

// Background Color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorBtn = document.getElementById("color-btn");
const resetBtn = document.getElementById("reset-color");
const color = document.querySelector(".color");

colorBtn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);

    color.textContent = hexColor;
    document.getElementById("change-color").style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

resetBtn.addEventListener('click', function() {
    document.getElementById("change-color").style.backgroundColor = "#ffffff";
    document.querySelector(".color").textContent = "#ffffff";
});