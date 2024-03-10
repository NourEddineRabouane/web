let par = document.querySelector(".swicher");
let chi = document.querySelector(".swicher div");

par.addEventListener("click", function () {
    // chi.classList.toggle("active");
    if (!par.classList.contains("active")) {
        par.classList.add("active");
        chi.style = "left :40px ; right : 0px";
    } else {
        chi.style = "left : 0px ; right : 40px";
        par.classList.remove("active");
    }
});
