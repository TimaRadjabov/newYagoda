"use strict";

const firstBtn = document.querySelector("#first");

function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
	<div class="wrapper" 
    <div class='modal__all' data-close="true"> 
			<div class='modal-window' style=" width: ${options.width}; height:${
      options.height
    }"  data-close="true">
        <button class="modal__close"></button>
			  <div class="modal__title">${options.title || ""}</div>
			  <div class="modal__text">${options.text || ""}</div>
			  <div class="modal__back">${options.img__back || ""}</div>
			  <div class="modal__img"> ${options.img} </div>
			  <div class="authorization"> <div class="form">
			  <form action="#" id=${options.id} class=${options.className}>
				 <div class="form__item">
					<img src="./img/form/phone.svg" alt="phone-icon" class="form__input-img" />
					<input
					  type="tel"
					  name="phone"
					  class="form__input ${options.inputClassName} _phone"
					  placeholder="+7(___) ___ ____"
					  data-slots="_"
					/>
				 </div>
				 <div class="form__item">
					<img src="./img/form/email.svg" alt="email-icon" class="form__input-img" />
					<input
					  type="email"
					  name="email"
					  class="form__input ${options.inputClassName} _email"
					  placeholder="bestpartner@yagoda.me"
					/>
				 </div>
				 <div class="form__item">
					<img src="./img/form/person.svg" alt="person-icon" class="form__input-img" />
					<input
					  type="text"
					  name="name"
					  class="form__input ${options.inputClassName} _name"
					  placeholder="Елена Плескова"
					/>
				 </div>
				 <input
                      type="text"
                      name="section-name-text"
                      value=${options.windowName}
                      hidden
                    />
                    <input
                      type="text"
                      name="section-btn-text"
                      value=${options.btnName}
                      hidden
                    />
                    <input
                      type="text"
                      name="section-name"
                      value=${options.formType}
                      hidden
                    />
				 <div class="main__button">
                  <button class="form__button btn" type="submit"">
						${options.btn}
                  </button>
                  <div class="button__effect"></div>
                </div>
			  </form>
			</div> 
			  <div class="modal__privacy"> <p class="modal__privacy-text"> Я подтверждаю, что ознакомлен и даю согласие на обработку персональных данных на условиях и для целей, определяемых Политикой конфиденциальности</p> </div>
			</div>
		</div>
		 </div>
     </div>
	`
  );
  document.body.appendChild(modal);
  return modal;
}

const Modal = function (options) {
  const $modal = _createModal(options);
  let destroyed = false;

  const modal = {
    open() {
      if (destroyed) {
        return console.log("Modal is destroyed");
      }
      $modal.classList.add("open");
    },
    close() {
      $modal.classList.remove("open");
    },
  };

  const listener = (event) => {
    if (event.target.dataset.close) {
      modal.close();
    }
  };

  $modal.addEventListener("click", listener);

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal);
      $modal.removeEventListener("click", listener);
      destroyed = true;
    },
  });
};
const myModal1 = Modal({
  btn: "Получить информацию",
  title: "Получите презентацию франшизы, финмодель и бизнес-план",
  img: `<img src="./img/modal/modal-01.svg" alt="modal-01">`,
  className: "modal__form-first",
  inputClassName: "_first",
  windowName: "Получите презентацию франшизы, финмодель и бизнес-план",
  btnName: "Получить информацию",
  formType: "Закрытая",
});
firstBtn.addEventListener("click", myModal1.open);

const myModal2 = Modal({
  btn: "Заказать звонок",
  title: "Получите подробную информацию по франшизе",
  text: "Заполните форму, чтобы заказать обратный звонок, и наш менеджер свяжется с вами в ближайшее время",
  img: ` <img src="./img/modal/modal-02.svg" alt="modal-02">`,
  img__back: `<img src="./img/modal/modal-02back.svg" alt="modal-02back">`,
  className: "modal__form-second",
  inputClassName: "_second",
  windowName: "Получите подробную информацию по франшизе",
  btnName: "Заказать звонок",
  formType: "Закрытая",
});

const myModal3 = Modal({
  height: "574px",
  btn: "Получить",
  width: "779px",
  title: "Уже уходите?",
  text: "Получите презентацию франшизы на почту.",
  img: `<img src="./img/modal/modal-03.svg" alt="modal-03">`,
  className: "modal__form-third",
  inputClassName: "_third",
  windowName: "Уже уходите?",
  btnName: "Получить",
  formType: "Закрытая",
});
