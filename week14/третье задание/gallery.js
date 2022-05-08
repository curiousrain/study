let mainPic = document.getElementById("main-pic");

function setPic(pic) {
    console.log(pic);
    mainPic.src = pic.src;
    picNumber = Number(pic.id);
}

var picNumber = 1;

function forth() {
    if (picNumber >= 9) {
        picNumber = 1;
    } else {
        picNumber++;
    }
    let pic = document.getElementById(picNumber);
    setPic(pic);
}

function back() {
    if (picNumber <= 1) {
        picNumber = 9;
    } else {
        picNumber--;
    }
    let pic = document.getElementById(picNumber);
    setPic(pic);
}