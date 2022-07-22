document.addEventListener("DOMContentLoaded", function () {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
    const pattern = el.getAttribute("placeholder"),
      slots = new Set(el.dataset.slots || "_"),
      prev = ((j) =>
        Array.from(pattern, (c, i) => (slots.has(c) ? (j = i + 1) : j)))(0),
      first = [...pattern].findIndex((c) => slots.has(c)),
      accept = new RegExp(el.dataset.accept || "\\d", "g"),
      clean = (input) => {
        input = input.match(accept) || [];
        return Array.from(pattern, (c) =>
          input[0] === c || slots.has(c) ? input.shift() || c : c
        );
      },
      format = () => {
        const [i, j] = [el.selectionStart, el.selectionEnd].map((i) => {
          i = clean(el.value.slice(0, i)).findIndex((c) => slots.has(c));
          return i < 0
            ? prev[prev.length - 1]
            : back
            ? prev[i - 1] || first
            : i;
        });
        el.value = clean(el.value).join``;
        el.setSelectionRange(i, j);
        back = false;
      };
    let back = false;
    el.addEventListener("keydown", (e) => (back = e.key === "Backspace"));
    el.addEventListener("input", format);
    el.addEventListener("focus", format);
    el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
  }

  const form = document.querySelector(".form__body");
  const modalFormFirst = document.querySelector(".modal__form-first");
  const modalFormSecond = document.querySelector(".modal__form-second");
  const modalFormThird = document.querySelector(".modal__form-third");
  const modalFormPhone = document.querySelector(".modal__form-phone");

  form.addEventListener("submit", formSend);
  modalFormFirst.addEventListener("submit", firstModalFormSend);
  modalFormSecond.addEventListener("submit", secondModalFormSend);
  modalFormThird.addEventListener("submit", thirdModalFormSend);
  modalFormPhone.addEventListener("submit", phoneModalFormSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form, "._req");

    let formData = new FormData(form);
    if (error === 0) {
      let response = await fetch("php/formProcessor.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        localStorage.setItem("nameClient", formData.get("name"));
        form.reset();
        window.location.href = "thanks.html";
      }
    }
  }
  async function firstModalFormSend(e) {
    e.preventDefault();
    let error = formValidate(modalFormFirst, "._first");

    let formData = new FormData(modalFormFirst);
    if (error === 0) {
      let response = await fetch("php/formProcessor.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        localStorage.setItem("nameClient", formData.get("name"));
        modalFormFirst.reset();
        window.location.href = "thanks.html";
      }
    }
  }
  async function secondModalFormSend(e) {
    e.preventDefault();
    let error = formValidate(modalFormSecond, "._second");

    let formData = new FormData(modalFormSecond);
    if (error === 0) {
      let response = await fetch("php/formProcessor.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        localStorage.setItem("nameClient", formData.get("name"));
        modalFormSecond.reset();
        window.location.href = "thanks.html";
      }
    }
  }
  async function thirdModalFormSend(e) {
    e.preventDefault();
    let error = formValidate(modalFormThird, "._third");

    let formData = new FormData(modalFormThird);
    if (error === 0) {
      let response = await fetch("php/formProcessor.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        localStorage.setItem("nameClient", formData.get("name"));
        modalFormThird.reset();
        window.location.href = "thanks.html";
      }
    }
  }
  async function phoneModalFormSend(e) {
    e.preventDefault();
    let error = formValidate(modalFormPhone, "._phoneI");

    let formData = new FormData(modalFormThird);
    if (error === 0) {
      let response = await fetch("php/formProcessor.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        localStorage.setItem("nameClient", formData.get("name"));
        modalFormThird.reset();
        window.location.href = "thanks.html";
      }
    }
  }

  function formValidate(form, className) {
    let error = 0;
    let formReq = document.querySelectorAll(className);

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
