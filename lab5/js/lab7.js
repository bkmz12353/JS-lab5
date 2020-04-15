var popap = document.getElementById('pop-ap');
var close = document.getElementById('close');
var N = 700;
window.addEventListener('scroll', func1);
function func1() {
    if (window.pageYOffset > N && window.pageYOffset<N+100) {
        popap.style.display = 'block';
    }
}
close.addEventListener('click', func2);
function func2() {
    popap.style.display = 'none';
    window.removeEventListener('scroll', func1);
}

window.addEventListener('load', func11);
function func11() {
    window.setTimeout(func21, 7000);
}
function func21() {
    popap.style.display = 'block';
}
close.addEventListener('click', func3);
function func3() {
    popap.style.display = 'none';
    window.removeEventListener('scroll', func11);
}