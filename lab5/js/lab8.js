var daysEl = document.getElementById('days');
var dateEl = document.getElementById('date');
var prevEl = document.getElementById('prev');
var nextEl = document.getElementById('next');
var deferentMonth = 0;
var oneHour = 1000 * 60 * 60;
var oneDay = oneHour * 24;
var MONTHS = [
    'Январь','Февраль','Март','Апрель',
    'Май','Июнь','Июль','Август',
    'Сентябрь','Октябрь','Ноябрь','Декабрь'
];
create();
prevEl.addEventListener('click', prev);
nextEl.addEventListener('click', next);
function prev() {
    deferentMonth--;
    create();
}
function next() {
    deferentMonth++;
    create();
}
function create() {
    var d = new Date();
    d.setMonth(d.getMonth() + deferentMonth);
    var year = d.getFullYear();
    var month = d.getMonth();
    var dayCount = (new Date(year, month + 1, 0)).getDate();
    var dayStart = (new Date(year, month, 1)).getDay();
    if (dayStart === 0) {
        dayStart = 7;
    }
    var today = null;
    if (deferentMonth === 0) {
        var today = d.getDate();
    }
    printDate(d);
    generate(dayCount, today, dayStart);
}
function generate(count, today, start) {
    var html = '';
    for (var i = 1; i < start; i++) {
        html += '<div class="day other"></div>';
    }
    for (var i = 1; i <= count; i++) {
        var cl = 'day';
        if (i === today) {
            cl += ' today';
        }
        html += '<div class="' + cl + '">' + i + '</div>';
    }
    daysEl.innerHTML = html;
}
function printDate(d) {
    dateEl.innerHTML = d.getFullYear() + ' '
        + MONTHS[d.getMonth()];
}