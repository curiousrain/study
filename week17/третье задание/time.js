console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400* 4 * 1000)) );


function formatDate(date){
    const diff = Date.now() - date;
    if (diff < 1000){
        return "Прямо сейчас";
    } else if (diff < 1000 * 60){
        return `${Math.round(diff / 1000)} сек. назад`;
    } else if (diff < 1000 * 60 * 60){
        return `${Math.round(diff / 1000 / 60)} мин. назад`;
    } else {
        return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
    }
}