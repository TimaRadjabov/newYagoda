
document.addEventListener("DOMContentLoaded", function(){
   const btn = document.getElementById("back");
   const clientId = document.getElementById("formName");

   btn.addEventListener('click', function(){
      window.location = "file:///C:/Users/Asus/Desktop/Yagoda/index.html";
   })
   let nameClient = localStorage.getItem('nameClient');
   clientId.innerHTML = nameClient + ',';
   document.title = nameClient + ", спасибо! Ваша заявка принята";
})