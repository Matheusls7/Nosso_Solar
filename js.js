var ImgLogo = document.querySelector(".ImgLogo");
var NavJS= document.querySelector("nav");
ImgLogo.addEventListener("mouseenter",function AnimaTopo(event){
    event.preventDefault();
    ImgLogo.classList.add("ImgLogoJS");
    NavJS.classList.add("navJs");
});
ImgLogo.removeEventListener("mouseenter",function AnimaTopo(event){
    event.preventDefault();
});




