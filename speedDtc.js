/*Detect overspeeding 
    
    Speed input is an integer
    the input printed as follows:
    Speed < 70; print OK!
    Speed < 70, deduct 1 point for every 5 km and print total number of demerit point
    suspend licence on more than 12 point
*/
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
// 'C:/Users/ELITEBOOK 820 G3/Desktop/code-challenge'

input.question("Speed of the car: ", function (speed){ 
    let speedOfCar = parseint(speed, 10);
    if (isNaN(speed)){
        process.stdout.write("Speed must be a numerical value\n");
        process.stdout.write("use this a follows: On prompt input as numerical value e.g 50\n");
        process.exit(1)
    }else if{
        (speedOfCar < 70){
        process.stdout.write("Ok!\n");
       } else{
        const demeritPoints = ((speedOfCar - 70) / 5);
        Math.ceil(demeritPoints);
        process.stdout.write(`Points: ${demeritPoints}\n`);
            if (demeritPoints >= 12) {
                process.stdout.write("License suspended.\n");                
            } else {
                process.exit(0);                
            }
       }
    }
    input.close();
});