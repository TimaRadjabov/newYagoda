const slider01 = document.querySelector(".slider01");
const slider02 = document.querySelector(".slider02");
const slider03 = document.querySelector(".slider03");
const slider04 = document.querySelector(".slider04");
const innerValue = document.querySelector(".result");
const innerValue02 = document.querySelector(".result02");
const progress = document.querySelector(".point01");
const thumb = document.querySelector(".thumb01");
const progress02 = document.querySelector(".point02");
const thumb02 = document.querySelector(".thumb02");
const progress03 = document.querySelector(".point03");
const thumb03 = document.querySelector(".thumb03");
const progress04 = document.querySelector(".point04");
const thumb04 = document.querySelector(".thumb04");
const screenWidth = window.screen.width;

function customSlider() {
  const num =
    (slider01.value * 3900 + slider02.value * 3700 + slider03.value * 3800) *
    slider04.value;

  const result = new Intl.NumberFormat("ru-RU").format(num);

  innerValue.innerHTML = result;
  innerValue02.innerHTML = result;

  if (screenWidth === 451) {
    if (slider01.value === "300") {
      progress.style.width = slider01.value - 300 + "px";
      thumb.style.left = slider01.value - 167 + "px";
    }
    if (slider01.value === "350") {
      progress.style.width = slider01.value - 282 + "px";
      thumb.style.left = slider01.value - 155 + "px";
    }
    if (slider01.value === "400") {
      progress.style.width = slider01.value - 272 + "px";
      thumb.style.left = slider01.value - 146 + "px";
    }
    if (slider01.value === "450") {
      progress.style.width = slider01.value - 262 + "px";
      thumb.style.left = slider01.value - 135 + "px";
    }
    if (slider01.value === "500") {
      progress.style.width = slider01.value - 250 + "px";
      thumb.style.left = slider01.value - 124 + "px";
    }

    if (slider02.value === "20") {
      progress02.style.width = slider02.value - 20 + "px";
      thumb02.style.left = +slider02.value + 110 + "px";
    }
    if (slider02.value === "25") {
      progress02.style.width = +slider02.value + 43 + "px";
      thumb02.style.left = +slider02.value + 168 + "px";
    }
    if (slider02.value === "30") {
      progress02.style.width = +slider02.value + 98 + "px";
      thumb02.style.left = +slider02.value + 224 + "px";
    }
    if (slider02.value === "35") {
      progress02.style.width = +slider02.value + 153 + "px";
      thumb02.style.left = +slider02.value + 280 + "px";
    }
    if (slider02.value === "40") {
      progress02.style.width = +slider02.value + 210 + "px";
      thumb02.style.left = +slider02.value + 336 + "px";
    }

    if (slider03.value === "10") {
      progress03.style.width = slider03.value - 10 + "px";
      thumb03.style.left = +slider03.value + 122 + "px";
    }
    if (slider03.value === "15") {
      progress03.style.width = +slider03.value + 53 + "px";
      thumb03.style.left = +slider03.value + 178 + "px";
    }
    if (slider03.value === "20") {
      progress03.style.width = +slider03.value + 108 + "px";
      thumb03.style.left = +slider03.value + 234 + "px";
    }
    if (slider03.value === "25") {
      progress03.style.width = +slider03.value + 163 + "px";
      thumb03.style.left = +slider03.value + 290 + "px";
    }
    if (slider03.value === "30") {
      progress03.style.width = +slider03.value + 220 + "px";
      thumb03.style.left = +slider03.value + 346 + "px";
    }

    if (slider04.value === "1") {
      progress04.style.width = slider04.value - 1 + "px";
      thumb04.style.left = +slider04.value + 122 + "px";
    }
    if (slider04.value === "2") {
      progress04.style.width = +slider04.value + 128 + "px";
      thumb04.style.left = +slider04.value + 252 + "px";
    }
    if (slider04.value === "3") {
      progress04.style.width = +slider04.value + 247 + "px";
      thumb04.style.left = +slider04.value + 372 + "px";
    }
  } else {
    if (slider01.value === "300") {
      progress.style.width = slider01.value - 300 + "px";
      thumb.style.left = slider01.value - 167 + "px";
    }
    if (slider01.value === "350") {
      progress.style.width = slider01.value - 250 + "px";
      thumb.style.left = slider01.value - 130 + "px";
    }
    if (slider01.value === "400") {
      progress.style.width = slider01.value - 200 + "px";
      thumb.style.left = slider01.value - 90 + "px";
    }
    if (slider01.value === "450") {
      progress.style.width = slider01.value - 170 + "px";
      thumb.style.left = slider01.value - 48 + "px";
    }
    if (slider01.value === "500") {
      progress.style.width = slider01.value - 130 + "px";
      thumb.style.left = slider01.value - 10 + "px";
    }

    if (slider02.value === "20") {
      progress02.style.width = slider02.value - 20 + "px";
      thumb02.style.left = +slider02.value + 110 + "px";
    }
    if (slider02.value === "25") {
      progress02.style.width = +slider02.value + 75 + "px";
      thumb02.style.left = +slider02.value + 193 + "px";
    }
    if (slider02.value === "30") {
      progress02.style.width = +slider02.value + 160 + "px";
      thumb02.style.left = +slider02.value + 280 + "px";
    }
    if (slider02.value === "35") {
      progress02.style.width = +slider02.value + 245 + "px";
      thumb02.style.left = +slider02.value + 367 + "px";
    }
    if (slider02.value === "40") {
      progress02.style.width = +slider02.value + 335 + "px";
      thumb02.style.left = +slider02.value + 455 + "px";
    }

    if (slider03.value === "10") {
      progress03.style.width = slider03.value - 10 + "px";

      thumb03.style.left = +slider03.value + 122 + "px";
    }
    if (slider03.value === "15") {
      progress03.style.width = +slider03.value + 75 + "px";
      thumb03.style.left = +slider03.value + 203 + "px";
    }
    if (slider03.value === "20") {
      progress03.style.width = +slider03.value + 160 + "px";
      thumb03.style.left = +slider03.value + 290 + "px";
    }
    if (slider03.value === "25") {
      progress03.style.width = +slider03.value + 245 + "px";
      thumb03.style.left = +slider03.value + 367 + "px";
    }
    if (slider03.value === "30") {
      progress03.style.width = +slider03.value + 335 + "px";
      thumb03.style.left = +slider03.value + 465 + "px";
    }

    if (slider04.value === "1") {
      progress04.style.width = slider04.value - 1 + "px";
      thumb04.style.left = +slider04.value + 122 + "px";
    }
    if (slider04.value === "2") {
      progress04.style.width = +slider04.value + 188 + "px";
      thumb04.style.left = +slider04.value + 306 + "px";
    }
    if (slider04.value === "3") {
      progress04.style.width = +slider04.value + 367 + "px";
      thumb04.style.left = +slider04.value + 490 + "px";
    }
  }
}

customSlider();

slider01.addEventListener("input", () => {
  customSlider();
});
