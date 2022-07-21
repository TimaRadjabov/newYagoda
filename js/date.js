document.addEventListener('DOMContentLoaded', function () {
   function newDate() {
      let dateNow = new Date().getFullYear();
      let dateText = document.querySelector('.date-now')
      dateText.innerHTML = dateNow;
  }

  newDate()
})