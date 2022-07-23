const slides =document.querySelectorAll('.slide-list'),
		dots=document.querySelectorAll('.slide-dot');

let index=0;

const activeSlide= n =>{
	for( let slide of slides){
	  slide.classList.remove('slide-active')
	}
	slides[n].classList.add('slide-active');
	slides[n].style.opacity = 0;
	setTimeout(() => slides[n].style.opacity = 1, 100)
	}

const activeDot= n =>{
	for(let dot of dots){
		dot.classList.remove('slide-active')
	}
	dots[n].classList.add('slide-active')
	}

	const nextSlide=()=>{
		if(index==slides.length-1){
			index=0;
			activeDot(index)
			activeSlide(index)
		}else{
			index++;
			activeDot(index);
			activeSlide(index)
		}
	}

	const prevSlide=()=>{
		if(index==0){
			index=slides.length-1;
			activeDot(index)
			activeSlide(index)
		}else{
			index--;
			activeDot(index);
			activeSlide(index)
		}
	}

	dots.forEach((item, indexDot)=>{
		item.addEventListener('click', ()=>{
			index=indexDot;
			activeDot(index);
			activeSlide(index)
		})
	})


	const mastersSlider=document.querySelectorAll('.masters__slider-list'),
    phoneSliders=document.querySelectorAll('.masters__phone-list'),
    nextBtn=document.querySelector('.masters__next'),
    backBtn=document.querySelector('.masters__back'),
    phoneNextBtn=document.querySelector('.masters__next-phone'),
    phoneBackBtn=document.querySelector('.masters__back-phone')

    let num=0;

const activeMastersSlide= n =>{
  
  for(let masterSlide of mastersSlider){
    masterSlide.classList.remove('masters-active')
  }
  mastersSlider[n].classList.add('masters-active');
  mastersSlider[n].style.opacity = 0;
  setTimeout(() => mastersSlider[n].style.opacity = 1, 200)
}

const activePhoneSlide= n =>{
  
  for(let phoneSlide of phoneSliders){
    phoneSlide.classList.remove('masters-active')
  }
  phoneSliders[n].classList.add('masters-active');
  phoneSliders[n].style.opacity = 0;
  setTimeout(() => phoneSliders[n].style.opacity = 1, 200)
}

const nextMasterSlide=()=>{
  if(num==mastersSlider.length-1){
    num=0;
    activeMastersSlide(num)
  }else{
    num++;
    activeMastersSlide(num)
  }
}

const prevMastersSlide=()=>{
  if(num==0){
    num=mastersSlider.length-1;
    activeMastersSlide(num)
  }else{
    num--;
    activeMastersSlide(num)
  }
}

const nextPhoneSlide=()=>{
  if(num==phoneSliders.length-1){
    num=0;
    activePhoneSlide(num)
  }else{
    num++;
    activePhoneSlide(num)
  }
}

const prevPhoneSlide=()=>{
  if(num==0){
    num=phoneSliders.length-1;
    activePhoneSlide(num)
  }else{
    num--;
    activePhoneSlide(num)
  }
}

phoneNextBtn.addEventListener('click', nextPhoneSlide);
phoneBackBtn.addEventListener('click', prevPhoneSlide);
backBtn.addEventListener('click', prevMastersSlide);
nextBtn.addEventListener('click', nextMasterSlide);
	// touch

const sliderTrack= document.querySelector('.slider-track');
const mastersTrack=document.querySelector('.masters__phone-track');

sliderTrack.addEventListener('touchstart', handleTouchStart, false);
sliderTrack.addEventListener('touchmove', handleTouchMove, false);
mastersTrack.addEventListener('touchstart', handleTouchStart, false);
mastersTrack.addEventListener('touchmove', handleTouchMove, false);



let x1=null;
let y1=null;

function handleTouchStart(event){
  const firstTouch=event.touches[0];

  x1=firstTouch.clientX;
  y1=firstTouch.clientY;
  
}

function handleTouchMove(event){
  if(!x1 || !y1){
    return false
  }
  let x2 =event.touches[0].clientX;
  let y2 =event.touches[0].clientY;
  

  let xDiff=x2-x1;
  let yDiff=y2-y1;

  if(Math.abs(xDiff)>Math.abs(yDiff)){
    // r-l
    if(xDiff>0) {
     	prevSlide();
		prevPhoneSlide();
		console.log(xDiff)
    }else{
      nextSlide();
		nextPhoneSlide();
		console.log('l')
    }
  }
  x1=null;
   y1=null;
}




