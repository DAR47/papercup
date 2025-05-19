adress1 = document.querySelector("#adress1").textContent;
adress2 = document.querySelector("#adress2").textContent;
adress3 = document.querySelector("#adress3").textContent;
adress = "0";


document.querySelector("#block2").addEventListener("click", function () {
    document.cookie = adress2;
  });
