"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const popupLink = document.querySelectorAll(".popup__link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelectorAll(".lock__padding");
  const popup = document.querySelector(".popup");

  let unlock = true;

  const timeout = 800;

  if (popupLink.length > 0) {
    popupLink.forEach((item) => {
      item.addEventListener("click", function (e) {
        const popupId = item.getAttribute("data-id");
        console.log(popupId);
        const currentPopup = document.querySelector(popupId);

        popupOpen(currentPopup);
      });
    });
  }

  const popupCloseIcon = document.querySelectorAll(".close__popup");
  if (popupCloseIcon.length > 0) {
    popupCloseIcon.forEach((item) => {
      item.addEventListener("click", function (e) {
        popupClose(item.closest(".popup"));
      });
    });
  }

  function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
      const popupActive = document.querySelector(".popup.open");
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      console.log(currentPopup);
      currentPopup.classList.add("open");
      currentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }
  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
  function bodyUnlock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const element = lockPadding[index];
          element.style.paddingRight = "0px";
        }
      }
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, timeout);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector(".popup.open");
      popupClose(popupActive);
    }
  });
});
