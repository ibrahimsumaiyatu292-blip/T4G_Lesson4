//selected the image that was hidden by CSS
 
let picture = document.querySelector("#image");
let button = document.querySelector(".button");
let hide = document.querySelector(".close");
//let hide_div = document.querySelector("#close-button");

// created a function that makes the image display
function displayImage(){
    // style the image thst was hidden by CSS to reappear
    picture.style.display = "block";
    button.innerHTML = "Here is a mistake for you!"
}

// add a click event that executes the displayImage function {
button.addEventListener("click", displayImage);
function hideImg(){
    picture.style.display = "none";
    button.innerHTML = "View"

}
hide.addEventListener("click" , hideImg);


