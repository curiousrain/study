class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return (this.rate * this.days);
    }
}

let worker = new Worker('Marina', 'Marinovich', 20000, 30);