let prompt = require('prompt-sync')()
class RailwayTicket{
    constructor(){
        this.name = ""
        this.coach = ""
        this.mob_no = 0
        this.amt = 0
    }
    accept(){
        this.name = prompt("Enter your name : ")
        this.coach = prompt("Enter type of coach : (First_AC,Second_AC,Third_AC,Sleeper)")
        this.mob_no = Number(prompt("Enter your mob_no : "))
    }
    update(){
        if(this.coach == "First_AC") this.amt = 700
        else if(this.coach ==  "Second_AC") this.amt = 500
        else if(this.coach ==  "Third_AC") this.amt = 250
        else if(this.coach == "Sleeper") this.amt = 0
    }
    display(){
        console.log("Name : ",this.name);
        console.log("Coach : ",this.coach);
        console.log("Mobile No : ",this.mob_no);
        console.log("Amount : ",this.amt);
    }}

    let obj = new RailwayTicket()
    obj.accept()
    obj.update()
    obj.display()