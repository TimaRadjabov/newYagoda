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
	// touch

const sliderTrack= document.querySelector('.slider-track');

sliderTrack.addEventListener('touchstart', handleTouchStart, false);
sliderTrack.addEventListener('touchmove', handleTouchMove, false);



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
    }else{
      nextSlide();
    }
  }
  x1=null;
   y1=null;
}