// function Automobile (wheels) {
//     this.wheels = wheels;
//     this.setColor = (color) => {
//         this.color = color;
//     }
//     this.getColor = () => {
//         return this.color;
//     }
// }

class Automobile {
    constructor(wheels) {
        this.wheels = wheels;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Motorcycle extends Automobile {
    constructor(make,model,year) {
        super(2);
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

//Motorcycle.prototype = new Automobile(2);

class Sedan extends Automobile {
    constructor(make,model,year) {
        super(4);
        this.make = make;
        this.model = model;
        this.year = year;
        this.doors = 4;
    }
}


//Sedan.prototype = new Automobile(4);

class Camry extends Sedan {
    constructor() {
        super("Toyota","Camry",2010);
    }
}


// Camry.prototype = new Sedan("Toyota","Camry",2010);



const camry = new Camry();

console.log(camry.doors);
console.log(camry.wheels);
console.log(camry.year);


class Maybach extends Sedan {
    constructor() {
        super("Mercedes","Maybach","2012" );
    }
    playMusic(song) {
        this.song = song;
    }
    getSong() {
        return this.song;
    }
    fly (flying) {
        if (flying) {
            console.log("Maybach is flying");
        } else {
            console.log("Maybach swerving");
        }
    }
}

const maybach = new Maybach();

let fly = true;
maybach.fly(fly);

