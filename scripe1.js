let box = document.getElementById('box');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    box.style.left = event.clientX - (box.clientWidth/2) + 'px';
    box.style.top = event.clientY - (box.clientWidth/2) + 'px';
}
