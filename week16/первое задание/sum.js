function sumInput() {
    let items = [];
    let sum = 0;

    for (;;) {

        let result = +prompt("Введите число", '');

        if (!result) break;

        items.push(result);

        sum += result;
    }
    alert(items.sort(function (a, b) {
        return a - b;
    }));

    alert(sum);
}
sumInput();