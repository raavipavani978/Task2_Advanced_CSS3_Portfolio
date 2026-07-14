const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML="☀️";
    }
    else{
        themeBtn.innerHTML="🌙";
    }
});