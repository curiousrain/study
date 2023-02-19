function doThingsWithNumber(n) {
    let reverse = 0;
    let sum = 0;
    let count = 0;
    while (n > 0) {
        const remainder = n % 10;
        reverse = reverse * 10 + remainder;
        sum += remainder;
        count++;
        n = Math.round(n / 10);
    }
    console.log('Цифр в числе:', count);
    console.log('Сумма:', sum);
    console.log('Обратный порядок:', reverse);
}

doThingsWithNumber(123);