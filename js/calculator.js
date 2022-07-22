const slider01 = document.querySelector(".slider01");
const slider02 = document.querySelector(".slider02");
const slider03 = document.querySelector(".slider03");
const slider04 = document.querySelector(".slider04");
const innerValue = document.querySelector(".result");
const innerValue02 = document.querySelector(".result02");
const progress = document.querySelector(".point01");
const progress02 = document.querySelector(".point02");
const progress03 = document.querySelector(".point03");
const progress04 = document.querySelector(".point04");
const screenWidth = window.screen.width;

function customSlider() {
  const num =
    (slider01.value * 3900 + slider02.value * 3700 + slider03.value * 3800) * slider04.value * 0.197;

  const result = new Intl.NumberFormat("ru-RU").format(num);

  innerValue.innerHTML = result;
  innerValue02.innerHTML = result;

  if(matchMedia){
    const matchResult = window.matchMedia("(max-width: 600px)");
    matchResult.addListener(changes);
    changes(matchResult);
    function changes(matchResult) {
      if (matchResult.matches) {
        if (slider01.value === "300") {
          progress.style.width = slider01.value - 300 + "px";
        }
        if (slider01.value === "350") {
          progress.style.width = slider01.value - 294 + "px";
        }
        if (slider01.value === "400") {
          progress.style.width = slider01.value - 284 + "px";
        }
        if (slider01.value === "450") {
          progress.style.width = slider01.value - 274 + "px";
        }
        if (slider01.value === "500") {
          progress.style.width = slider01.value - 263 + "px";
        }
    
        if (slider02.value === "20") {
          progress02.style.width = slider02.value - 20 + "px";
        }
        if (slider02.value === "25") {
          progress02.style.width = +slider02.value + 31 + "px";
        }
        if (slider02.value === "30") {
          progress02.style.width = +slider02.value + 86 + "px";
        }
        if (slider02.value === "35") {
          progress02.style.width = +slider02.value + 141 + "px";
        }
        if (slider02.value === "40") {
          progress02.style.width = +slider02.value + 197 + "px";
        }
    
        if (slider03.value === "10") {
          progress03.style.width = slider03.value - 10 + "px";
        }
        if (slider03.value === "15") {
          progress03.style.width = +slider03.value + 41 + "px";
        }
        if (slider03.value === "20") {
          progress03.style.width = +slider03.value + 96 + "px";
        }
        if (slider03.value === "25") {
          progress03.style.width = +slider03.value + 151 + "px";
        }
        if (slider03.value === "30") {
          progress03.style.width = +slider03.value + 207 + "px";
        }
    
        if (slider04.value === "1") {
          progress04.style.width = slider04.value - 1 + "px";
        }
        if (slider04.value === "2") {
          progress04.style.width = +slider04.value + 117 + "px";
        }
        if (slider04.value === "3") {
          progress04.style.width = +slider04.value + 235 + "px";
        }
      } else{
        if (slider01.value === "300") {
          progress.style.width = slider01.value - 300 + "px";
    
        }
        if (slider01.value === "350") {
          progress.style.width = slider01.value - 262 + "px";
    
        }
        if (slider01.value === "400") {
          progress.style.width = slider01.value - 223 + "px";
        }
        if (slider01.value === "450") {
          progress.style.width = slider01.value - 185 + "px";
        }
        if (slider01.value === "500") {
          progress.style.width = slider01.value - 146 + "px";
        }
    
        if (slider02.value === "20") {
          progress02.style.width = slider02.value - 20 + "px";
          
        }
        if (slider02.value === "25") {
          progress02.style.width = +slider02.value + 63 + "px";
          
        }
        if (slider02.value === "30") {
          progress02.style.width = +slider02.value + 145 + "px";
          
        }
        if (slider02.value === "35") {
          progress02.style.width = +slider02.value + 230 + "px";
          
        }
        if (slider02.value === "40") {
          progress02.style.width = +slider02.value + 313 + "px";
        }
    
        if (slider03.value === "10") {
          progress03.style.width = slider03.value - 10 + "px";
        }
        if (slider03.value === "15") {
          progress03.style.width = +slider03.value + 73 + "px"
        }
        if (slider03.value === "20") {
          progress03.style.width = +slider03.value + 157 + "px";
        }
        if (slider03.value === "25") {
          progress03.style.width = +slider03.value + 240 + "px";
        }
        if (slider03.value === "30") {
          progress03.style.width = +slider03.value + 325 + "px";
        }
    
        if (slider04.value === "1") {
          progress04.style.width = slider04.value - 1 + "px";
        }
        if (slider04.value === "2") {
          progress04.style.width = +slider04.value + 173 + "px";
        }
        if (slider04.value === "3") {
          progress04.style.width = +slider04.value + 350 + "px";
        }
      }
    }
  }



  /* if (window.matchMedia("(max-width: 600px)").matches) {
    if (slider01.value === "300") {
      progress.style.width = slider01.value - 300 + "px";
    }
    if (slider01.value === "350") {
      progress.style.width = slider01.value - 294 + "px";
    }
    if (slider01.value === "400") {
      progress.style.width = slider01.value - 284 + "px";
    }
    if (slider01.value === "450") {
      progress.style.width = slider01.value - 274 + "px";
    }
    if (slider01.value === "500") {
      progress.style.width = slider01.value - 263 + "px";
    }

    if (slider02.value === "20") {
      progress02.style.width = slider02.value - 20 + "px";
    }
    if (slider02.value === "25") {
      progress02.style.width = +slider02.value + 31 + "px";
    }
    if (slider02.value === "30") {
      progress02.style.width = +slider02.value + 86 + "px";
    }
    if (slider02.value === "35") {
      progress02.style.width = +slider02.value + 141 + "px";
    }
    if (slider02.value === "40") {
      progress02.style.width = +slider02.value + 197 + "px";
    }

    if (slider03.value === "10") {
      progress03.style.width = slider03.value - 10 + "px";
    }
    if (slider03.value === "15") {
      progress03.style.width = +slider03.value + 41 + "px";
    }
    if (slider03.value === "20") {
      progress03.style.width = +slider03.value + 96 + "px";
    }
    if (slider03.value === "25") {
      progress03.style.width = +slider03.value + 151 + "px";
    }
    if (slider03.value === "30") {
      progress03.style.width = +slider03.value + 207 + "px";
    }

    if (slider04.value === "1") {
      progress04.style.width = slider04.value - 1 + "px";
    }
    if (slider04.value === "2") {
      progress04.style.width = +slider04.value + 117 + "px";
    }
    if (slider04.value === "3") {
      progress04.style.width = +slider04.value + 235 + "px";
    }
  } else {
    if (slider01.value === "300") {
      progress.style.width = slider01.value - 300 + "px";

    }
    if (slider01.value === "350") {
      progress.style.width = slider01.value - 262 + "px";

    }
    if (slider01.value === "400") {
      progress.style.width = slider01.value - 223 + "px";
    }
    if (slider01.value === "450") {
      progress.style.width = slider01.value - 185 + "px";
    }
    if (slider01.value === "500") {
      progress.style.width = slider01.value - 146 + "px";
    }

    if (slider02.value === "20") {
      progress02.style.width = slider02.value - 20 + "px";
      
    }
    if (slider02.value === "25") {
      progress02.style.width = +slider02.value + 63 + "px";
      
    }
    if (slider02.value === "30") {
      progress02.style.width = +slider02.value + 145 + "px";
      
    }
    if (slider02.value === "35") {
      progress02.style.width = +slider02.value + 230 + "px";
      
    }
    if (slider02.value === "40") {
      progress02.style.width = +slider02.value + 313 + "px";
    }

    if (slider03.value === "10") {
      progress03.style.width = slider03.value - 10 + "px";
    }
    if (slider03.value === "15") {
      progress03.style.width = +slider03.value + 73 + "px"
    }
    if (slider03.value === "20") {
      progress03.style.width = +slider03.value + 157 + "px";
    }
    if (slider03.value === "25") {
      progress03.style.width = +slider03.value + 240 + "px";
    }
    if (slider03.value === "30") {
      progress03.style.width = +slider03.value + 325 + "px";
    }

    if (slider04.value === "1") {
      progress04.style.width = slider04.value - 1 + "px";
    }
    if (slider04.value === "2") {
      progress04.style.width = +slider04.value + 173 + "px";
    }
    if (slider04.value === "3") {
      progress04.style.width = +slider04.value + 350 + "px";
    }
  } */
}

customSlider();

slider01.addEventListener("input", () => {
  customSlider();
});
