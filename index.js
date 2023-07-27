for (let i=1; i<=10; i++){
    const m = document.getElementById("m" + i);
    const mm = document.getElementById("mm" + i);
    const mmm = document.getElementById("mmm" + i);

m.addEventListener("click", function () {
    mm.classList.add("show");
});
mmm.addEventListener("click", function () {
    mm.classList.remove("show");
});
}