"use strict";
//POSITIONINGS
//text positioning
document.getElementById("text").style.position = "absolute";
document.getElementById("text").style.top="50%";
document.getElementById("text").style.left="50%";
//button positioning
document.querySelector("button").style.position = "absolute";
document.querySelector("button").style.top="60%";
document.querySelector("button").style.left="50%";
//FUNCTIONALITY
document.addEventListener("DOMContentLoaded", allfunctions);
function allfunctions(){
  const fontSizes=["7px", "12px", "16px", "20px", "30px"];
  let currentSize=0;
  document.querySelector("button").addEventListener("click", sizeAll);
  function sizeAll(){
    document.querySelector("#text").style.fontSize=fontSizes[currentSize];
	currentSize=(currentSize+1)%fontSizes.length;
  }
  sizeAll();
}
allfunctions();