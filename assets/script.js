const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//variables//

const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const img = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")

let index = 0

//functions//

function main() {
	dot()
	clickLeft()
	clickRight()
}
main()

//dots//
function dot() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
		if (i == index) {
			dot.classList.add("dot_selected")
		}
	}
}

//arrow left//
function clickLeft() {
	arrowLeft.addEventListener("click", () => {
		const slideDots = document.querySelectorAll(".dots .dot")
		slideDots[index].classList.remove("dot_selected")
		index--
		if(index < 0) {
			index = slides.length -1
		}
		slideDots[index].classList.add("dot_selected")
		img.src = "./assets/images/slideshow/" + slides[index].image;
		bannerText.innerHTML = slides[index].tagLine
	}
	)
}

//arrow right//
function clickRight() {
	arrowRight.addEventListener("click", () => {
		const slideDots = document.querySelectorAll(".dots .dot")
		slideDots[index].classList.remove("dot_selected")
		index++
		if(index > slides.length -1) {
			index = 0
		}
		slideDots[index].classList.add("dot_selected")
		img.src = "./assets/images/slideshow/" + slides[index].image;
		bannerText.innerHTML = slides[index].tagLine
	}
	)
}



