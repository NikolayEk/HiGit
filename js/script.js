var link = document.querySelector(".buttonmap");
var modal = document.querySelector(".writeusform");
var close = document.querySelector(".buttonclose");

link.addEventListener("click", function(){
    modal.classList.toggle("show");
})

close.addEventListener("click", function(){
    modal.classList.remove("show");
})