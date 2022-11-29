/* grade student marks
value between 0-100 should be graded;
A ==>79 B ==>60 C ==>49 D ==>40 E ==>39
*/
const  readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
input.question("Enter students marks: ", function (mark){ 
    let marks= parseint(mark, 10);
    if (isNaN(mark)){
        process.stdout.write("Please Enter a valid number\n");
        process.exit(1)
    }else if{
         (marks > 79) {
            process.stdout.write ("A\n")
            process.stdout.write("A")
        } else if (marks > 60) {
            process.stdout.write("B\n"); 
            process.stdout.write("B")   
        } else if(marks > 49) {
            process.stdout.write("C\n");
            process.stdout.write("C")
        } else if(marks > 40) {
            process.stdout.write("D\n");
            process.stdout.write("D")
        }else if(marks >39){
            process.stdout.write("E\n");
            process.stdout.write("E")
        }
    } 
    input.close();
})