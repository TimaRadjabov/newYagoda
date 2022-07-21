const slides =document.querySelectorAll('.slide-list'),
		dots=document.querySelectorAll('.slide-dot');

let index=0;

const activeSlide= n =>{
for( slide of slides){
	slide.classList.remove('slide-active')
}
slides[n].classList.add('slide-active')
}

const activeDot= n =>{
	for( dot of dots){
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