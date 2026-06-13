//Working with arrays
const result = []
const drone = {
    speed :100,
    color: 'yellow'

}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
    result.push(key, drone[key])
})
console.log(result)


//Working with Maps 
let bestBoxer = new Map()
bestBoxer.set(1, "The Champion")
bestBoxer.set(2, "The Runner-up")
bestBoxer.set(3, "The third place")
console.log(bestBoxer)
console.log(bestBoxer.get(1))


//Working with sets
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple']
const uniqueFruits  = new Set(repetitiveFruits)
console.log(uniqueFruits)