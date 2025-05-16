const calcDiv = document.querySelector(".calc-button");
for (let i = 1; i <= 9; i++) {
  const btn = document.createElement("button");
  
  btn.textContent = i;
  calcDiv.append(btn);
}


const btn2 = document.createElement("button");
btn2.className = "button-zero"
btn2.textContent = "00";
calcDiv.append(btn2);
const btn3 = document.createElement("button");
btn3.textContent = 0;
calcDiv.append(btn3);
const btn4 = document.createElement("button");
btn4.textContent = "AC";
btn4.className = "button-zero"
calcDiv.append(btn4);
const btn5 = document.createElement("button");
btn5.textContent = ".";
calcDiv.append(btn5);