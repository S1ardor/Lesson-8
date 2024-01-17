// 1-usul //

const elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input");
var elPreButton = document.querySelector(".js-button");
var elNextButton = document.querySelector(".js-btn");
var elPreButtonDelete = document.querySelector(".js-delete__pre-button");
var elNextButtonDelete = document.querySelector(".js-delete__next-button");
var elRender = document.querySelector(".box");
const elBtns = document.querySelectorAll(".js-form button")
elRender.classList.add("box__style");

var cars = ["BMW", "MERS", "AUDI", "BYD"];
var crasControl = cars.join(" ");
elRender.textContent = crasControl;

// pushPUSH button //
elPreButton.addEventListener("click", function(){
    var inputPreValue = elInput.value.trim();
    var result = cars.unshift(inputPreValue);
    elRender.textContent = result;
    elRender.textContent = cars;
});

elNextButton.addEventListener("click", function(){
    var inputNextValue = elInput.value.trim();
    var nextResult = cars.push(inputNextValue);
    elRender.textContent = nextResult;
    elRender.textContent = cars;
});

// delete button //
var preInputValue = elInput.value.trim();

elPreButtonDelete.addEventListener("click", function(){
    var preDeleteInpur = cars.shift(preInputValue);
    elRender.textContent = preDeleteInpur;
    elRender.textContent = cars;
});

elNextButtonDelete.addEventListener("click", function(){
    var nextDeleteInput = cars.pop(preInputValue);
    elRender.textContent = nextDeleteInput;
    elRender.textContent = cars;
});





// 2-usul css ga etibor berilmagan lekin kod yaxshi chiqgan//

// const elForm = document.querySelector(".js-form");
// var elInput = document.querySelector(".js-input");
// var elPreButton = document.querySelector(".js-button");
// var elNextButton = document.querySelector(".js-btn");
// var elPreButtonDelete = document.querySelector(".js-delete__pre-button");
// var elNextButtonDelete = document.querySelector(".js-delete__next-button");
// var elRender = document.querySelector(".box");
// const elBtns = document.querySelectorAll(".js-form button");

// var cars = ["BMW", "MERS", "AUDI", "BYD"];

// const elList = document.querySelector(".js-list")
// let elTemplate = document.querySelector(".js-template").content
// const handleRenderList = (arr) => {
//     if(arr.length){
//         const documentFragment = document.createDocumentFragment()
//         elList.innerHTML = null
//         for(const word of arr){
//             const clone = elTemplate.cloneNode(true)
//             const elHeading = clone.querySelector("h3")
//             elHeading.textContent = word
//             documentFragment.appendChild(clone);
//         }   
//         elList.appendChild(documentFragment);
//     }
// }
// const handleClick = (evt) => {
//     console.log(evt.target.id)
//     switch(evt?.target?.id){
//         case "before":{
//             cars.unshift(elInput.value)
//         }break;
//         case "after":{
//             cars.push(elInput.value)
//         }break;
//         case "left":{
//             cars.shift()
//         }break;
//         case "right":{
//             cars.pop()
//         }break;
//         default: return false
//     }
//     handleRenderList(cars)
// }
// elBtns.forEach((item) => {
//     item.addEventListener("click", handleClick)
// })
// elForm.addEventListener("submit", function(evt){
   
//     evt.preventDefault()
//     var inputValue = elInput.value;

// });
// handleRenderList(cars);
