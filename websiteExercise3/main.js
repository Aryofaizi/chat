const openFooter = document.querySelector("#open-footer");
const footer = document.querySelector(".footer");
const closeBtn = document.querySelector(".close-btn");
const footerLeftDiv = document.querySelector(".footer-left-div");
const footerRightDiv = document.querySelector(".footer-right-div");
const footerChangeDiv = document.querySelector(".footer-change-div");
openFooter.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("clicked");
    openFooter.classList.add("open-footer-style");
    footer.classList.add("footer-change");
    footerLeftDiv.style.display = "none";
    footerRightDiv.style.display = "none";
    closeBtn.style.display = "block";
    footerChangeDiv.style.display = "grid";
    
});
closeBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    closeBtn.style.display = "none";
    footerChangeDiv.style.display = "none";
    footer.classList = "footer";
    footerLeftDiv.style.display = "block";
    footerRightDiv.style.display = "block";
});