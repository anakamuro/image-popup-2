const images = document.querySelectorAll('.images img');
const main = document.querySelector('.main');
const close = document.querySelector('span .close');

console.log(images)
images.forEach(function(image){
    // item.addEventListener("click", showImage)
    console.log(image)
    image.onclick = () => {
     
        main.style.display = "block"
        document.querySelector('.main img').src= image.getAttribute('src');
        document.querySelector('body').style.backgroundColor = "rgba(0, 0, 0, .66) ";
    }
})

    // close.forEach(function(item){
    //     item.addEventListener("click", function(){
    //         main.style.disply = "none";
    //     })
    // })
    document.querySelector('.close').onclick = () => {
        console.log("click")
        document.querySelector('div.hide').style.display = "none";
        document.querySelector('body').style.backgroundColor = "white";
    }



// function showImage(e){
//     main.querySelector("img").setAttribute("src", this.src);
//     main.classList.remove("hide");
// }