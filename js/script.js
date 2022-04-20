let usdCurrensy = document.querySelector("#usd-theme");
let uzsCurrensy = document.querySelector("#uzs-theme");
let usdInput = document.querySelector("#usd-input");
let uzsInput = document.querySelector("#uzs-input");
let changeBtn = document.querySelector("#change-btn");
let resultBtn = document.querySelector("#result-btn");
let historyResult = document.querySelector("#history-result");
let body = document.querySelector("body");
let changeBtnTrue = true;

body.addEventListener('keyup', function(event) {
  if (event.keyCode === 9) {
event.preventDefault();
document.getElementById("repeat_exchange_btn").click();
}
});

// keyup change btn

usdInput.addEventListener("keyup", function(event) {
  if(event.keyCode === 13){
    event.preventDefault();
    resultBtn.click();
  } 
  if (event.keyCode === 9) {
    event.preventDefault();
    changeBtn.click();
  }
});

// change for click 

changeBtn.onclick = function(){
  if (changeBtnTrue == true) {
    changeBtnTrue = false;
  } else {
    changeBtnTrue = true;
  }
  if (changeBtnTrue == true) {
    uzsCurrensy.innerHTML = "Uzs";
    usdCurrensy.innerHTML = "Usd";
    uzsCurrensy.classList.add("uzs-class-topic");
    usdCurrensy.classList.add("usd-class-topic");
    uzsCurrensy.classList.remove("uzs-class-topic");
    usdCurrensy.classList.remove("usd-class-topic");
    usdInput.value = "";
    uzsInput.value = "";
  } else{
    uzsCurrensy.innerHTML = "Usd";
    usdCurrensy.innerHTML = "Uzs";
    uzsCurrensy.classList.remove("uzs-class-topic");
    usdCurrensy.classList.remove("usd-class-topic");
    uzsCurrensy.classList.add("uzs-class-topic");
    usdCurrensy.classList.add("usd-class-topic");
    usdInput.value = "";
    uzsInput.value = "";
  }
}

// result onclick

resultBtn.addEventListener("click", function(resBtn) {
  resBtn.preventDefault();

  if (resBtn == true) {
    let usdValue = Number(usdInput.value);

    let usdNumber = Number(usdInput.value);

    if (usdValue == "" || usdInput.value.length > 10) {
      usdInput.style.border = "1px solid red";
      usdInput.placeholder = "Enter value...";
      return;
    } else {
      usdInput.style.border = "1px solid white";
    }

    if (isNaN(usdValue)) {
      usdInput.style.border = "1px solid red";
      usdInput.placeholder = "please enter number";
      return;
    } else {
      usdInput.style.border = "1px solid #fff";
    }
    
    usdNumber = usdNumber * 257,13;
    uzsInput.value = usdNumber + " Uzs";

    let historyResBox = document.createElement("li");
    let historyRes = document.createElement("p");
    historyRes.textContent = usdValue + "Uzs = " + usdNumber + " Usd";

    historyResBox.append(historyRes);

    historyResult.appendChild(historyResBox);

    let element = document.getElementById("historyResBox");
    element.scrollTop = element.scrollHeight;
  } else {
    let usdValue = Number(usdInput.value);
    let usdNumber = Number(usdInput.value);
    
    if (usdValue == "" || usdInput.value.length > 10) {
      usdInput.style.border = "1px solid red";
      usdInput.placeholder = "Enter number";
      return;
    } else {
      usdInput.style.border = "1px solid #fff";
    }
    if (isNaN(usdValue)) {
      usdInput.style.border = "1px solid red";
      usdInput.placeholder = "Enter number";
      return;
    } else {
      usdInput.style.border = "1px solid #fff";
    }

    usdNumber = usdNumber * 11257,13;
    uzsInput.value = usdNumber + " Uzs";

    let historyResBox = document.createElement("li");
    let historyRes = document.createElement("p");
    historyRes.textContent = usdValue + " Usd = " + usdNumber + " Uzs";

    historyResBox.append(historyRes);

    historyResult.appendChild(historyResBox);

    let element = document.getElementById("historyResBox");
    element.scrollTop = element.scrollHeight;
    
  }
})