"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const tabsBtn = document.querySelectorAll(".nav__block");
  const tabsItem = document.querySelectorAll(".tabs__item");

  const structureBtn = document.querySelectorAll(".structure__item");
  const structureItem = document.querySelectorAll(".structure__content");

  const mastersBtn = document.querySelectorAll(".masters__item");
  const mastersItem = document.querySelectorAll(".masters__content");

  tabsBtn.forEach((item) => {
    item.addEventListener("click", () => {
      let tabId = item.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
      
      if (!item.classList.contains("active")) {
        tabsBtn.forEach((item) => {
          item.classList.remove("active");
        });
        tabsItem.forEach((item) => {
          item.classList.remove("active__item");
        });
        item.classList.add("active");
        currentTab.classList.add("active__item");
      }
    });
  });
  structureBtn.forEach((item) => {
    item.addEventListener("click", () => {
      let structureId = item.getAttribute("data-structure");
      let currentTab = document.querySelector(structureId);

      if (!item.classList.contains("actived")) {
        structureBtn.forEach((elem) => {
          elem.classList.remove("actived");
        });
        structureItem.forEach((elem) => {
          elem.classList.remove("actived__item");
        });
        item.classList.add("actived");
        currentTab.classList.add("actived__item");
      }
    });
  });

  mastersBtn.forEach((item) => {
    item.addEventListener("click", () => {
      let mastersId = item.getAttribute("data-master");
      let currentTab = document.querySelector(mastersId);
      if (!item.classList.contains("masters__active")) {
        mastersBtn.forEach((elem) => {
          elem.classList.remove("masters__active");
        });
        mastersItem.forEach((elem) => {
          elem.classList.remove("actived__item");
        });
      }
      item.classList.add("masters__active");
      currentTab.classList.add("actived__item");
    });
  });



  document.querySelector(".nav__block").click();
  document.querySelector(".structure__item").click();
  document.querySelector(".masters__item").click();
});
