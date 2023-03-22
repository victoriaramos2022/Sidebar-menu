const bars = document.querySelector(".fa-bars-staggered")
const sidebar = document.querySelector(".sidebar")
const close = document.querySelector(".fa-xmark")

bars.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar")
})

close.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar")
})