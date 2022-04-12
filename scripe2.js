function random(number){
    return Math.floor(Math.random() * number)
}
document.onclick = function () {
ubah = "rgb("+random(255)+", "+random(255)+", "+random(255)+")";
box.style.backgroundColor = ubah;
}