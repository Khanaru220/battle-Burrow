"use strict";
// modal-window hidden
// modal-blur
// modal-img
// modal-text
// icon-question
// https://media.graphcms.com/resize=w:600,fit:crop/output=format:webp/compress/RA0YrjsBSMmhfUcYI9Ua

// .color-round:hover,
// .color-selected

//.icon-question--pink

const iconQuestionEl = document.querySelectorAll(".icon-question");
const iconQuestionPinkEl = document.querySelector(".icon-question--pink");
const modalWindowEl = document.querySelector(".modal-window");

const modalBlurEl = document.querySelector(".modal-blur");
const modalImgEl = document.querySelector(".modal-img");

const colorRoundEl = document.querySelectorAll(".color-round");
// const colorSelectedEl = document.querySelector(".color-selected");
const armImgEl = document.querySelectorAll(".arm-container");

// Function

const displayModalWindow = function () {
	modalWindowEl.classList.remove("hidden");
};

const closeModalWindow = function () {
	modalWindowEl.classList.add("hidden");
};

// We need specific url -- because some time we click one icon 2 3 times -- toggle not work well
const changeUrlModalImg01 = function () {
	modalImgEl.setAttribute(
		"src",
		"https://media.graphcms.com/resize=w:500,fit:crop/output=format:webp/compress/Q4rGYp6NTTGnBNbpB5VG"
	);
};

const changeUrlModalImg02 = function () {
	modalImgEl.setAttribute(
		"src",
		"https://media.graphcms.com/resize=w:600,fit:crop/output=format:webp/compress/RA0YrjsBSMmhfUcYI9Ua"
	);
};

// -----------
// add Event Listener
// -----------

// click icon "?" -- dispaly + change URL
iconQuestionPinkEl.addEventListener("click", changeUrlModalImg02);
iconQuestionPinkEl.addEventListener("click", displayModalWindow);

for (let i = 0; i < iconQuestionEl.length; i++) {
	if (!iconQuestionEl[i].classList.contains("icon-question--pink")) {
		iconQuestionEl[i].addEventListener("click", changeUrlModalImg01);
		iconQuestionEl[i].addEventListener("click", displayModalWindow);
	}
}
// close modal -- click ouside + ESC key

modalBlurEl.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape") {
		closeModalWindow();
	}
});

// select color

for (let i = 0; i < colorRoundEl.length; i++) {
	colorRoundEl[i].addEventListener("click", function () {
		for (let t = 0; t < colorRoundEl.length; t++) {
			colorRoundEl[t].classList.remove("color-selected");
		}
		colorRoundEl[i].classList.add("color-selected");
	});
}

// for (let i = 0; i < armImgEl.length; i++) {
// 	armImgEl[i].addEventListener("click", function () {
// 		for (let t = 0; t < armImgEl.length; t++) {
// 			armImgEl[t].classList.remove("color-selected");
// 		}
// 		armImgEl[i].classList.add("arm-selected");
// 	});
// }
