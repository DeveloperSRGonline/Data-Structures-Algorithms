let prompt = require('prompt-sync')()
class CabService {
    constructure(){
        this.car_type = "";
        this.km = 0.0;
        this.bill = 0.0;
    }

    accept(){
        this.car_type = prompt("Enter car_type (AC or NON-AC) : ")
        this.km = Number(prompt("Enter km travelled : "))
    }

    calculate(){
        if(this.car_type == "AC") {
            if(this.km <= 5) {
                this.bill = 150;
            }
            else {
                this.bill = 150 + (this.km - 5) * 10;
            }
        }else if(this.car_type == "NON-AC"){
            if(this.km <= 5) {
                this.bill = 120;
            }
            else {
                this.bill = 120 + (this.km - 5) * 8;
            }
        }
    }
    display(){
        console.log("car_type : " , this.car_type);
        console.log("km travelled : " , this.km);
        console.log("Total bill : " , this.bill);
    }
}

let obj = new CabService()
obj.accept()
obj.calculate()
obj.display()
// console.log(120 + 8 * 7);