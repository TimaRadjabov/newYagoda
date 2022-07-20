
document.addEventListener("DOMContentLoaded", function(){
   const btn = document.getElementById("back");
   btn.addEventListener('click', function(){
      window.location = "file:///C:/Users/Asus/Desktop/Yagoda/index.html";
   })

   localStorage.setItem('tima', "Timur");
   console.log(localStorage.getItem('tima'));
})