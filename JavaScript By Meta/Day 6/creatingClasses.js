class Train {
    constructor(color, lightsOn){
        this.color = color
        this.lightsOn = lightsOn
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn
    }
    lightStatus(){
        console.log("Lights on? "+this.lightsOn)

    }
    getSelf(){
        console.log(this)
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this)
        console.log(proto)
    }
}
var train1 = new Train("blue", true)
console.log(train1)
console.log(train1.getPrototype())
class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color,lightsOn)
        this.passengers = passengers
        this.highSpeedOn = highSpeedOn;

    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status: ' + this.highSpeedOn)

    }
    toggleLights(){
        this.lightsOn() = !this.lightsOn
    }
}