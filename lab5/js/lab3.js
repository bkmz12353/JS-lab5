function q1()
{
    let elem = document.getElementById('elem');
    alert(elem.tagName);

}
function q2()
{
    let elem = document.getElementById('elem1');
    alert(elem.tagName.toLowerCase());

}
function q3()
{
    let elems = document.querySelectorAll('.www');
    for (let i = 0; i < elems.length; i++) {
        elems[i].innerHTML = elems[i].innerHTML + elems[i].tagName.toLowerCase();
    }

}