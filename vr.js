"use strict"

const header = document.querySelector(".header")
const headerWrapper = document.querySelector(".header__wrapper");
let headerFlag = false;

const chooseList = document.querySelector('.choose__list');

let reviewAvatars = document.querySelectorAll(".circle-avatar")

const extraItems = document.querySelectorAll(".extra-content");
let arrBtnMenu = document.querySelectorAll(".menu__btn-arr");

let sliderItem = document.querySelector(".slider__item")
let sliderContent = document.querySelector(".slider__content")
let slider =  document.querySelector(".slider")

let sliderPoints = document.querySelector(".slider__points")

for(let i of arrBtnMenu){
	i.addEventListener("click",()=>{
		let value = i.getAttribute("value");
		let submenu = document.querySelector('.extra-' + value);
		let openMenu = document.querySelectorAll(".extra-open");
		let rotateArrow = document.querySelectorAll(".arr-clicked")

		if(openMenu.length > 1){ 

			

			
			openMenu[0].classList.toggle("extra-open");
			rotateArrow[0].classList.toggle("arr-clicked");
		
			submenu.classList.toggle("extra-open");
			i.classList.toggle("arr-clicked")

		} 
		else if(openMenu.length === 1 && submenu === openMenu[0]){
			submenu.classList.toggle("extra-open");
			i.classList.toggle("arr-clicked")
		}
		else if(openMenu.length === 1 && submenu !== openMenu[0]){
			openMenu[0].classList.toggle("extra-open")
			rotateArrow[0].classList.toggle("arr-clicked");
			submenu.classList.toggle("extra-open")
			i.classList.toggle("arr-clicked")
		}
		else{
			submenu.classList.toggle("extra-open")
			i.classList.toggle("arr-clicked")
		}
	})
}

for(let item of extraItems){
	item.addEventListener("click", ()=>{
		openMenu[0].classList.toggle("extra-open");
		rotateArrow[0].classList.toggle("arr-clicked");
	})
}

window.addEventListener("scroll", ()=>{
	if(window.pageYOffset > 0 && !headerFlag){
		header.classList.add("header-fixed");
		headerWrapper.classList.add("header__wrapper-fixed");
		headerFlag = true;
	}else if(window.pageYOffset === 0){
		header.classList.remove("header-fixed");
		headerWrapper.classList.remove("header__wrapper-fixed");
		headerFlag = false;
	}
})


document.querySelector(".choose__text-hidden").classList.add("choose__text-active");
document.querySelector(".btn-arr").classList.add("arr-clicked");
for(let item of chooseList.children){
	item.addEventListener("click", function(){
		let paragraph = this.getElementsByTagName("p")[0];
		let button = this.getElementsByTagName("button")[0];

		button.classList.toggle("arr-clicked");
		paragraph.classList.toggle("choose__text-active");
		
		if(paragraph.classList.contains("choose__text-active")){
			paragraph.style.maxHeight = paragraph.scrollHeight + "px";
		}else{
			paragraph.style = ""
		}
	})
}



for(let i of reviewAvatars){
	i.addEventListener("click", function(){
		let iconContainer = this;
		let img = this.getElementsByClassName("img-shadow")[0];
		let iconText = this.getElementsByClassName("review__text-container_close")[0];

		let activeGradientBor =  document.querySelectorAll(".active-img");
		let activeGradientShadow =  document.querySelectorAll(".shadow-active");
		let activeIconText =  document.querySelectorAll(".review__text-container_active");

		if( activeGradientBor.length >= 1){
			for(let i of activeGradientBor){
				i.classList.toggle("active-img");
			}
			iconContainer.classList.toggle("active-img");
		}else{
			iconContainer.classList.toggle("active-img");
		}

		if(activeGradientShadow.length >= 1){
			for(let i of activeGradientShadow){
				i.classList.toggle("shadow-active");
			}
			img.classList.toggle("shadow-active");
		}else{
			img.classList.toggle("shadow-active");
		}


		if(activeIconText.length >= 1){
			for(let i of activeIconText){
				i.classList.toggle("review__text-container_active");
			}
			iconText.classList.toggle("review__text-container_active");
		}else{
			iconText.classList.toggle("review__text-container_active");
		}

	})
}

let value = 1;



for(let i of sliderPoints.children){
	i.addEventListener("click", function(){

		let num = this.getAttribute("num");
		let active = document.querySelector('div[num="'+ num + '"]')
		for(let i of document.querySelectorAll(".slider__point_active")){
			i.classList.remove("slider__point_active")
		}
		active.classList.add("slider__point_active")
		value = num - 1
		sliderContent.style.transform = "translateX(-" + (636 * value++)  +"px)"

		clearInterval(slideInterval)
	})
}



sliderContent.style.transform = "0%"
let slideInterval = setInterval(()=>{
	if(value === sliderContent.children.length){
		value = 0;
	}
	sliderContent.style.transform = "translateX(-" + (636 * value++)  +"px)"
	for(let i of document.querySelectorAll(".slider__point_active")){
		i.classList.remove("slider__point_active")
	}
	let active = document.querySelector('div[num="'+ value + '"]')
	active.classList.add("slider__point_active")
},4000)

// clearInterval(slideInterval)	





