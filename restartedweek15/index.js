const totalPrices = document.querySelectorAll(".cart-total-price");
const total = document.getElementById("total");

document.getElementById("discount").onclick = function () {
    let sum = 0;
    if (check) {
        return
    }
    for (const totalPrice of totalPrices) {
        const price = Number(totalPrice.innerHTML);
        const discountPrice = (price * 0.8);
        totalPrice.innerHTML = discountPrice;
        sum += discountPrice;
    }
    total.innerHTML = sum;
    check = true;
}

let check = false; 
