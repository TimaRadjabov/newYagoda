document.addEventListener("DOMContentLoaded", function () {
  const clientId = document.getElementById("formName");

  let nameClient = localStorage.getItem("nameClient");
  clientId.innerHTML = nameClient + ",";
  document.title = nameClient + ", спасибо! Ваша заявка принята";
});
