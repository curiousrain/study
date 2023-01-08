function whatYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));
}
function showYear() {
    const year = Number(document.getElementById("year").value);
    const leapYear = whatYear(year);
    if (leapYear) {
        alert("Год високосный")
    }
    else {
        alert("Год не високсоный")
    }
};



