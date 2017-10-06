class Ninja {
    constructor(name) {
        this.name = name;
    }

    announce(){
        console.log("Ninja", this.name, "is Here !");
    }
}

new Ninja('Mini').announce();