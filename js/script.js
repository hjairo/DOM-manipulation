/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Fun DOM Manipulation - JS
 * Developed by: Robert Manolis - Student Success Specialist
 */

"use strict";


/* Variables to target the `body` element */
const body = document.querySelector('body');
const h1 = document.createElement("H1");

	h1.innerHTML = "Fun DOM Manipulation";
	body.append(h1);

const div = document.createElement("div");
	div.id = "boat-container";
	div.className = "boat-container";
	body.append(div);


const image = document.createElement("IMG");
	image.src = "img/boat.png";
	image.alt = "Tugboat";
	image.id = "boat-img";
	body.append(image);


const image2 = document.createElement("IMG");
	image2.src = "img/mike.png";
	image.alt = "Mike The Frog";
	image.id = "mike";
	image.className = "mike";
	body.append(image2);
