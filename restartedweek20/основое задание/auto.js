const models = document.querySelectorAll(".car-model")
const form = document.querySelector(".car");

function selectModel(target) {
    models.forEach(e => {
        e.classList.add("hidden");
    });
    document.getElementById(target.value).classList.remove("hidden");
}

function calculate() {
    var sum = 0;
    const formData = new FormData(form)
    for (var entry of formData.entries()) {
        const price = getPriceForEntry(entry);
        sum += price;
    }
    alert(`Ваша цена: ${sum}`)
}

function getPriceForEntry(entry) {
    switch (entry[0]) {
        case "car-model":
            switch (entry[1]) {
                case "A1":
                    return 1000;
                case "A2":
                    return 2000;
                case "A3":
                    return 3000;
                case "series-1":
                    return 4000;
                case "series-2":
                    return 5000;
                case "series-3":
                    return 6000;
            }
            break;
        case "fuel":
            switch (entry[1]) {
                case "petrol":
                    return 13000;
                case "diesel":
                    return 14000;
                case "gas":
                    return 13000;
                case "electro":
                    return 20000;
            }
            break;
        case "volume":
            switch (entry[1]) {
                case "small":
                    return 15000;
                case "big":
                    return 17000;
            }
            break;
        case "run":
            return 10000 / Number(entry[1]);
        case "why-sell":
            switch (entry[1]) {
                case "sell-new":
                    return 18000;
                case "sell-old":
                    return 19000;
            }
            break;
        case "owners":
            switch (entry[1]) {
                case "one-two":
                    return 20000;
                case "more-two":
                    return 21000;
            }
            break;

    }
    return 0;
}