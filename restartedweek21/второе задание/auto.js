class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo() {
        return this.type + " " + this.brand
    }

    getPrice() {
        return this.price
    }
}

class Car extends Transport {
    constructor(type, price, brand, image, doors) {
        super(type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors
    }
}

class Bike extends Transport {
    constructor(type, price, brand, image, maxSpeed) {
        super(type, price, brand, image);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

const vehicles = data.map((vehicle) => {
    switch (vehicle.type) {
        case "car":
            return new Car(vehicle.type, vehicle.price, vehicle.brand, vehicle.image, vehicle.doors)
        case "bike":
            return new Bike(vehicle.type, vehicle.brand, vehicle.brand, vehicle.image, vehicle.maxSpeed)
    }
})

const list = document.getElementById("list");

let showList = "";
vehicles.forEach((element) => {
    showList +=
        `<div class = "vehicles-list">
        <p class = "info">${element.getInfo()}</p>
        <p class = "doors-speed">${element.type == "car" ? element.getDoorsCount() : element.getMaxSpeed()}</p>
        <p class = "price">${element.getPrice()}</p>
        <img class = "image" src = "${element.image}">
        </div>`
})

list.innerHTML = showList;

